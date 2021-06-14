package org.example.Angular.controllers;

import org.example.Angular.models.Mail;
import org.example.Angular.services.MailSender;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("send")
public class MailController {

    private final MailSender mailSender;

    public MailController(MailSender mailSender) {
        this.mailSender = mailSender;
    }

    @PostMapping
    public ResponseEntity<?> send(@RequestBody Mail mail){
        String message = mail.getMessage() + "\nEmail: " + mail.getEmail()
                + "\nТелефон: " + mail.getPhone() + "\n\nИмя: " + mail.getName();

        try { mailSender.send("shdeemon@mail.ru", "Форма для связи", message); }
        catch (Exception e) { return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR); }

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
