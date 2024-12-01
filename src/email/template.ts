export interface TemplateVariable {
  name: string;
  email: string;
  telephone: string;
  subject: string;
  message: string;
}

export const emailTemplate = (options: TemplateVariable) => {
  const { name, email, telephone, subject, message } = options;

  return `<!-- Change values in the template and pass { {variables} } with API call -->
<!-- Feel free to adjust it to your needs and delete all these comments-->
<!-- Also adapt TXT version of this email -->
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
  <title></title>
  <!--[if !mso]><!-- -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--<![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style type="text/css">
    #outlook a {
      padding: 0;
    }

    .ReadMsgBody {
      width: 100%;
    }

    .ExternalClass {
      width: 100%;
    }

    .ExternalClass * {
      line-height: 100%;
    }

    body {
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }

    table,
    td {
      border-collapse: collapse;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }

  </style>
  <!--[if !mso]><!-->
  <style type="text/css">
    @media only screen and (max-width:480px) {
      @-ms-viewport {
        width: 320px;
      }
      @viewport {
        width: 320px;
      }
    }
  </style>
  <!--<![endif]-->
  <!--[if mso]><xml>  <o:OfficeDocumentSettings>    <o:AllowPNG/>    <o:PixelsPerInch>96</o:PixelsPerInch>  </o:OfficeDocumentSettings></xml><![endif]-->
  <!--[if lte mso 11]><style type="text/css">  .outlook-group-fix {    width:100% !important;  }</style><![endif]-->
  <!--[if !mso]><!-->
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" type="text/css">
  <style type="text/css">
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
  </style>
  <!--<![endif]-->
  <style type="text/css">
    @media only screen and (max-width:595px) {
      .container {
        width: 100% !important;
      }
      .button {
        display: block !important;
        width: auto !important;
      }
    }
  </style>
</head>
<body style="font-family: 'Inter', sans-serif; background: #f8fbff; padding-top: 30px">
  <h1 style="font-size: 24px; text-align: center;">New Message from UHERNANDEZ.COM</h1>
  <table width="50%" cellspacing="0" cellpadding="10" border="0" align="center" >
    <tbody>
      <tr>
        <td style="font-size:18px; font-weight: bold">Name</td>
        <td>${name}</td>
      </tr>
      <tr>
        <td style="font-size:18px; font-weight: bold">Email</td>
        <td>${email}</td>
      </tr>
      <tr>
        <td style="font-size:18px; font-weight: bold">Telephone</td>
        <td>${telephone}</td>
      </tr>
      <tr>
        <td style="font-size:18px; font-weight: bold">Subject</td>
        <td>${subject}</td>
      </tr>
      <tr>
        <td style="font-size:18px; font-weight: bold">Message</td>
        <td>${message}</td>
      </tr>
    </tbody>
  </table>
</body>
</html>
`;
};
