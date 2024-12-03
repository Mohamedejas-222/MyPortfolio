// Initialize EmailJS
        emailjs.init("DiQWG9L_Ch4gf1nRY"); // Replace with your EmailJS User ID

        // Form validation and EmailJS integration
        function sendEmail(event) {
            event.preventDefault();

            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            // Validation
            if (name === '') {
                alert('Please enter your name.');
                return;
            }

            if (email === '') {
                alert('Please enter your email.');
                return;
            }

            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailPattern.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            if (subject === '') {
                alert('Please enter the subject.');
                return;
            }

            if (message === '') {
                alert('Please enter your message.');
                return;
            }

            // Send email using EmailJS
            emailjs.send("service_zgoiyjc", "template_4icsjlv", {
                name: name,
                email: email,
                subject: subject,
                message: message
            }).then(function(response) {
                alert("Message sent successfully!");
                document.getElementById('contactForm').reset(); // Reset form after success
            }, function(error) {
                alert("Failed to send message: " + error.text);
            });