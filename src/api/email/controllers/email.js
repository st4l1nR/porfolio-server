"use strict";

module.exports = {
  async send(ctx, next) {
    console.log('trigger')
    const {firstName, lastName, email, subject, message} = ctx.request.body;
    try {
      await strapi.plugins["email"].services.email.send({
        to: "stalinramosbw@gmail.com",
        from: email,
        replyTo: email,
        subject:`${subject} - ${firstName} ${lastName}`,
        text:message,
      });
      ctx.response.status = 200;
    } catch (err) {
      ctx.badRequest("Page report controller error", { moreDetails: err });
    }
  },
};
