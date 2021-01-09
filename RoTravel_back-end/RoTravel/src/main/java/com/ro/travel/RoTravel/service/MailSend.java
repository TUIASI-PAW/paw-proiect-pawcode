package com.ro.travel.RoTravel.service;

import com.ro.travel.RoTravel.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service("mailsend")
public class MailSend {
    private JavaMailSender javaMailSender;

    @Autowired
    public MailSend(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    @Async
    public void sendEmail(SimpleMailMessage email) {


        javaMailSender.send(email);
    }


}
