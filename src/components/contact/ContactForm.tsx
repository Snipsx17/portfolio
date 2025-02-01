import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Button,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
} from '@components/ui';
import { useToast } from '@components/hooks/use-toast';
import { useCallback, useEffect, useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { actions } from 'astro:actions';
import { formSchema } from './formSchema';
import { Loader2, Mail } from 'lucide-react';
import { getTranslation } from '@utils/i18n';

export const ContactForm = ({ lang }: { lang: string }) => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [isClient, setIsClient] = useState(false);
  const { toast } = useToast();
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      telephone: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = useCallback(async (values: z.infer<typeof formSchema>) => {
    setIsFetching(true);
    const recaptchaToken = recaptchaRef.current
      ? (await recaptchaRef.current.executeAsync()) || ''
      : '';

    try {
      const { error } = await actions.sendForm({
        ...values,
        recaptchaToken,
      });
      if (error) {
        throw new Error(error.message);
      }

      toast({
        description: getTranslation(lang, 'form.success message'),
      });
      form.reset();
      setIsFetching(false);
      return;
    } catch (error) {
      toast({
        description: getTranslation(lang, 'form.error message'),
      });
      setIsFetching(false);
    }
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="md:grid md:grid-cols-2 gap-6 px-10"
      >
        {/* name  */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel className="text-2xl">
                {getTranslation(lang, 'form.name')}
              </FormLabel>
              <FormControl>
                <Input {...field} placeholder="Jhon Doe" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* email  */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel className="text-2xl">
                {getTranslation(lang, 'form.email')}
              </FormLabel>
              <FormControl>
                <Input {...field} placeholder="jhon@example.com" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* telephone  */}
        <FormField
          control={form.control}
          name="telephone"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel className="text-2xl">
                {getTranslation(lang, 'form.telephone')}
              </FormLabel>
              <FormControl>
                <Input {...field} placeholder="+1 555 555 5555" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* subject */}
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel className="text-2xl">
                {getTranslation(lang, 'form.subject')}
              </FormLabel>
              <Select onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Job offer">
                    {getTranslation(lang, 'form.Job offer')}
                  </SelectItem>
                  <SelectItem value="Business inquiry">
                    {getTranslation(lang, 'form.Business inquiry')}
                  </SelectItem>
                  <SelectItem value="Collaboration">
                    {getTranslation(lang, 'form.collaboration')}
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="mb-4 col-span-2">
              <FormLabel className="text-2xl">
                {getTranslation(lang, 'form.message')}
              </FormLabel>
              <FormControl>
                <Textarea
                  className="resize-none"
                  {...field}
                  placeholder={getTranslation(
                    lang,
                    'form.Enter your message here'
                  )}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          size={'lg'}
          className="w-full md:col-span-2"
          type="submit"
          disabled={isFetching && true}
        >
          {isFetching ? <Loader2 className="animate-spin" /> : <Mail />}
          {getTranslation(lang, 'form.submit')}
        </Button>

        {isClient && (
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LdBMGsqAAAAAEhRzhQXSryid-hu7cCVHZms9qPM"
            size="invisible"
          />
        )}
      </form>
    </Form>
  );
};
