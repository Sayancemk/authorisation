import {
    PASSWORD_RESET_REQUEST_TEMPLATE,
    PASSWORD_RESET_SUCCESS_TEMPLATE,
    VERIFICATION_EMAIL_TEMPLATE,
    WELCOME_EMAIL_TEMPLATE,
} from "./emailTemplates.js"
import { mailtrapClient, sender } from "./mailtrap.config.js";
import { ApiError } from "../utils/ApiError.js"


const sendVerificationEmail = (async (email, verificationCode) => {
    const recipient = [{
        email,
    }]
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Verify Your Email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationCode),
            category: "Email Verification",
        });
        console.log("Verification email sent successfully", response);
    } catch (error) {
        console.log(error);
        throw new ApiError(500, "Failed to send verification email");
    }
})


const sendWElcomeEmail = (async (email, name) => {

    const recipient = [{
        email,
    }]

    try{
        const response=await mailtrapClient.send({
            from:sender,
            to:recipient,
            subject:"Welcome to our platform",
            html:WELCOME_EMAIL_TEMPLATE.replace("{name}",name),
            category:"Welcome Email",
        })
        console.log("Welcome email sent successfully",response);
    }catch(err){
        console.log(err);
        throw new ApiError(500,"Failed to send welcome email");
    }
})

const sendPasswordResetRequestEmail = (async (email, resetURL) => {
    const recipient = [{
        email,
    }]
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Password Reset Request",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
            category: "Password Reset Request",
        });
        console.log("Password reset request email sent successfully", response);
    } catch (error) {
        console.log(error);
        throw new ApiError(500, "Failed to send password reset request email");
    }
})

const sendResetPasswordSuccessEmail = (async (email) => {
    const recipient = [{
        email,
    }]
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Password Reset Success",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
            category: "Password Reset Success",
        });
        console.log("Password reset success email sent successfully", response);
    } catch (error) {
        console.log(error);
        throw new ApiError(500, "Failed to send password reset success email");
    }
})
export {
    sendVerificationEmail,
    sendWElcomeEmail,
    sendPasswordResetRequestEmail,
    sendResetPasswordSuccessEmail,
}