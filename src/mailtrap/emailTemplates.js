export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Verify Your Email</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>Thank you for signing up! Your verification code is:</p>
    <div style="text-align: center; margin: 30px 0;">
      <span style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #4CAF50;">{verificationCode}</span>
    </div>
    <p>Enter this code on the verification page to complete your registration.</p>
    <p>This code will expire in 15 minutes for security reasons.</p>
    <p>If you didn't create an account with us, please ignore this email.</p>
    <p>Best regards,<br>Authentication system</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Successful</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Password Reset Successful</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>We're writing to confirm that your password has been successfully reset.</p>
    <div style="text-align: center; margin: 30px 0;">
      <div style="background-color: #4CAF50; color: white; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; display: inline-block; font-size: 30px;">
        ✓
      </div>
    </div>
    <p>If you did not initiate this password reset, please contact our support team immediately.</p>
    <p>For security reasons, we recommend that you:</p>
    <ul>
      <li>Use a strong, unique password</li>
      <li>Enable two-factor authentication if available</li>
      <li>Avoid using the same password across multiple sites</li>
    </ul>
    <p>Thank you for helping us keep your account secure.</p>
    <p>Best regards,<br>Your App Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Password Reset</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>We received a request to reset your password. If you didn't make this request, please ignore this email.</p>
    <p>To reset your password, click the button below:</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="{resetURL}" style="background-color: #4CAF50; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Reset Password</a>
    </div>
    <p>This link will expire in 1 hour for security reasons.</p>
    <p>Best regards,<br>Your App Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const WELCOME_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome Email</title>
</head>
 
<body style="background-color:black">
    <table align="center" border="0" cellpadding="0" cellspacing="0"
           width="550" bgcolor="white" style="border:2px solid black">
        <tbody background-color:black>
            <tr>
                <td align="center">
                    <table align="center" border="0" cellpadding="0"
                           cellspacing="0" class="col-550" width="550">
                        <tbody>
                            <tr>
                                <td align="center" style="background-color: purple; font-size=45px
                                           height: 50px;">
                              <img 
                               style= "height=100px;width:789px" src="https://img.freepik.com/free-vector/cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37328.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724889600&semt=ais_hybrid">
 
                                    <a href="#" style="text-decoration: none;">
                                        <p style="color:white;
                                                  font-weight:bold; font-size=20px">
                                        Authentication System
                                        </p>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr style="height: 300px; background-color:orange">
                <td align="center" style="border: none;
                           border-bottom: 2px solid #4cb96b; 
                           padding-right: 20px;padding-left:20px">
 
                    <p style="font-weight: bolder;font-size: 42px;
                              letter-spacing: 0.025em;
                              color:black;">
                        Hello {name}!
                        <br> Check out our latest Blogs
                    </p>
                </td>
            </tr>
 
            <tr style="display: inline-block;">
                <td style="height: 150px;
                           padding: 20px;
                           border: none; 
                           border-bottom: 2px solid #361B0E;
                           background-color: white;">
                   
                    <h2 style="text-align: left;
                               align-items: center;">
                      welcome to our authentication system
                   </h2>
                    <p class="data"
                       style="text-align: justify-all;
                              align-items: center; 
                              font-size: 15px;
                              padding-bottom: 12px;">
                     Here we can sent the welcome email to You.You can use our latest features of our system
                    <p>
                        <a href=
"https://www.geeksforgeeks.org/design-patterns-a-must-skill-to-have-for-software-developers-in-2019/"
                           style="text-decoration: none; 
                                  color:black; 
                                  border: 2px solid #4cb96b; 
                                  padding: 10px 30px;
                                  font-weight: bold;"> 
                           Read More 
                      </a>
                    </p>
                </td>
            </tr>
            <tr style="border: none; 
            background-color: #4cb96b; 
            height: 40px; 
            color:white; 
            padding-bottom: 20px; 
            text-align: center;">
                
<td height="40px" align="center">
    <p style="color:white; 
    line-height: 1.5em;">
    Authentication System
    </p>
    <a href="#" 
    style="border:none;
           text-decoration: none; 
           padding: 5px;"> 
           
    <img height="30" 
    src=
"https://extraaedgeresources.blob.core.windows.net/demo/salesdemo/EmailAttachments/icon-twitter_20190610074030.png" 
    width="30" /> 
    </a> 
    
    <a href="#"
    style="border:none;
    text-decoration: none; 
    padding: 5px;"> 
    
    <img height="30" 
    src=
"https://extraaedgeresources.blob.core.windows.net/demo/salesdemo/EmailAttachments/icon-linkedin_20190610074015.png" 
width="30" /> 
    </a>
    
    <a href="#" 
    style="border:none;
    text-decoration: none;
    padding: 5px;"> 
    
    <img height="20"
    src=
"https://extraaedgeresources.blob.core.windows.net/demo/salesdemo/EmailAttachments/facebook-letter-logo_20190610100050.png" 
        width="24" 
        style="position: relative; 
               padding-bottom: 5px;" />
    </a>
</td>
</tr>
<tr>
<td style="font-family:'Open Sans', Arial, sans-serif;
           font-size:11px; line-height:18px; 
           color:#999999;" 
    valign="top"
    align="center">
<a href="#"
   target="_blank" 
   style="color:#999999; 
          text-decoration:underline;">PRIVACY STATEMENT</a> 
          | <a href="#" target="_blank" 
          style="color:#999999; text-decoration:underline;">TERMS OF SERVICE</a> 
          | <a href="#"
          target="_blank" 
          style="color:#999999; text-decoration:underline;">RETURNS</a><br>
                  © 2012 Auth Company. All Rights Reserved.<br>
                  If you do not wish to receive any further 
                  emails from us, please
                  <a href="#"
                  target="_blank"
                  style="text-decoration:none; 
                         color:#999999;">unsubscribe</a>
            </td>
              </tr>
            </tbody></table></td>
        </tr>
        <tr>
          <td class="em_hide"
          style="line-height:1px;
                 min-width:700px;
                 background-color:#ffffff;">
              <img alt="" 
              src="images/spacer.gif" 
              style="max-height:1px; 
              min-height:1px; 
              display:block; 
              width:700px; 
              min-width:700px;" 
              width="700"
              border="0" 
              height="1">
              </td>
        </tr>
        </tbody>
    </table>
</body>
`;


export const LOGIN_EMAIL_TEMPLATE = `
<!-- Change values in the template and pass { {variables} } with API call -->
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

<body style="font-family: 'Inter', sans-serif; background: #E5E5E5;">
  <table width="100%" cellspacing="0" cellpadding="0" border="0" align="center" bgcolor="#F6FAFB">
    <tbody>
      <tr>
        <td valign="top" align="center">
          <table class="container" width="600" cellspacing="0" cellpadding="0" border="0">
            <tbody>
              <tr>
                <img  src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/6050490/cover_image/regular_1708x683/Untitled-f669dcd36b0e05e02d4573cb800e24b0.png" style="width:500px"
                <td style="padding:8px 0 30px 0; font-size: 14px; color: #4C83EE;">
                </td>
              </tr>
              <tr>
                <td class="main-content" style="padding: 48px 30px 40px; color: #000000;" bgcolor="#ffffff">
                  <table width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                      <tr>
                        <td style="padding: 0 0 24px 0; font-size: 18px; line-height: 150%; font-weight: bold; color: #000000; letter-spacing: 0.01em;">
                          Welcome, {name}!
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 0 0 10px 0; font-size: 14px; line-height: 150%; font-weight: 400; color: #000000; letter-spacing: 0.01em;">
                          Thanks for choosing our authentication system. We are happy to see you on board.
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 0 0 16px 0; font-size: 14px; line-height: 150%; font-weight: 400; color: #000000; letter-spacing: 0.01em;">
                          To get started, do this next step:
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 0 0 24px 0;">
                          <a class="button"  title="Reset Password" style="width: 100%; background: #4C83EE; text-decoration: none; display: inline-block; padding: 10px 0; color: #fff; font-size: 14px; line-height: 21px; text-align: center; font-weight: bold; border-radius: 7px;">Login Succesfully</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 0 0 16px 0; font-size: 14px; line-height: 150%; font-weight: 400; color: #000000; letter-spacing: 0.01em;">
                          If you need some help to get started check our: support group
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 0 0 8px;">
                   

                            </span>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 0 0 60px;">
                        </td>
                      </tr>
                      <tr>
                      <tr>
                        <td style="padding: 0 0 16px;">
                          <span style="display: block; width: 117px; border-bottom: 1px solid #8B949F;"></span>
                        </td>
                      </tr>
                      <tr>
                        <td style="font-size: 14px; line-height: 170%; font-weight: 400; color: #000000; letter-spacing: 0.01em;">
                          Best regards, <br><strong>Authentication App</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding: 24px 0 48px; font-size: 0px;">
                  <!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:top;width:300px;">      <![endif]-->
                
                  <div class="outlook-group-fix" style="padding: 0 0 20px 0; vertical-align: top; display: inline-block; text-align: center; width:100%;">
                    <span style="padding: 0; font-size: 11px; line-height: 15px; font-weight: normal; color: #8B949F;">Authentication Services<br/>
                     © 2012 Auth Company. All Rights Reserved<br>
                      If you do not wish to receive any further 
                  emails from us, please
                  <a href="#"
                  target="_blank"
                  style="text-decoration:none; 
                         color:blue;">unsubscribe</a></span>
                  </div>
                  <!--[if mso | IE]>      </td></tr></table>      <![endif]-->
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</body>
</html>
`;