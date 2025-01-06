import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@components/ui/accordion';
import type { CollectionEntry } from 'astro:content';
import { Dot, Icon } from 'lucide-react';
type experience = CollectionEntry<'experiences'>;

export const Experience = ({ experience }: { experience: experience }) => {
  return (
    <div className="flex mb-[-3px]">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-p text-4xl">
            <h3>
              {experience.data.title} - {experience.data.date}
            </h3>
          </AccordionTrigger>
          <AccordionContent>
            <div>
              <div>
                <h4 className="text-3xl line-clamp-1">
                  {experience.data.address}
                </h4>
              </div>
              <span className="flex items-center text-3xl"></span>
            </div>
            <div className="py-16 pl-24 pr-16">
              <ul className="list-disc mb-8">
                {experience.data.description.map((desc) => (
                  <li className="mb-4 text-3xl">{desc}</li>
                ))}
              </ul>
              <h4 className="text-3xl">
                <strong>Stack: </strong>
                {experience.data.stack}
              </h4>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
