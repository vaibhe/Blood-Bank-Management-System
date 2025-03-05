package com.admin.demo.controller;


import com.admin.demo.service.EmailSenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/email")
public class EmailController {
    @Autowired
    private EmailSenderService emailSenderService;

    @CrossOrigin(origins = "http://localhost:3000") // Allow only this origin
   @PostMapping("/send")
    public ResponseEntity<Map<String, String>> sendEmail(@RequestBody Map<String, String> emailDetails) {
        String to = emailDetails.get("to");
        String subject = emailDetails.get("subject");
        String message = emailDetails.get("message");

        try {
            emailSenderService.sendNotificationEmail(to, subject, message);
            Map<String, String> response = new HashMap<>();
            response.put("status", "success");
            response.put("message", "Email sent successfully to " + to);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, String> response = new HashMap<>();
            response.put("status", "error");
            response.put("message", "Failed to send email: " + e.getMessage());
            return ResponseEntity.status(500).body(response);
        }
    }

}
