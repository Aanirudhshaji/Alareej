document.querySelector('.toggle-btn').addEventListener('click', function() {
    document.querySelector('.mobile-navbar').classList.toggle('active');
});




window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0);
  });

    document.getElementById('explore-button').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        
        // Get the target section element
        var target = document.getElementById('about');
        
        // Scroll to the target section with a slight offset
        window.scrollTo({
            top: target.offsetTop - 50, // Adjust the offset as needed
            behavior: 'smooth'
        });
    });
   
    document.addEventListener('DOMContentLoaded', function() {
        const steps = document.querySelectorAll('.step');
        const progress = document.getElementById('progress');
        const connector = document.getElementById('connector');
        const resultBox = document.getElementById('result-box');

        // Define messages for each step
        const messages = [
            "Schedule a face-to-face meeting or Zoom call with one of our advisors. It’s crucial to have a basic understanding of your business activity, shareholders, target customers, office space requirements, and potential growth opportunities. Our dedicated team is fully prepared to assist you every step of the way, ensuring your business plan is comprehensive, accurate, detailed, and ready for successful implementation.",
            "We can guide you in selecting the best jurisdiction for your company, customized to fit your unique needs and desired market. Options include establishing your business in the UAE Mainland for operational flexibility, setting up in a Free Zone for industry specialization or cost-effectiveness, or considering an offshore setup to access the thriving business environment of the UAE from anywhere in the world.",
            "Organize all your registration paperwork, including the Application Form, Memorandum of Association, Certificate of Incorporation, Bank and Residency Statements, and other essential documents. Our experienced team will guide you through each step, as requirements may differ based on license type and jurisdiction, ensuring a smooth and efficient process for your business setup.",
            "Before making the move to the UAE, it is vital to apply for the necessary visas for yourself, your team, and any dependents, if necessary. The specific visa options and the availability of visas for your employees and family members will be dependent on the location of your business. Our team will lead you through the visa application process and offer the relevant information and assistance needed for a successful transition to the UAE.",
            "To do business in the UAE, having a corporate bank account is crucial. Depending on your financial needs, you can choose from various national, international, and digital banks. Our team of experts will help you select the most suitable bank for your business and assist in preparing the necessary documentation for a smooth submission process."
        ];

        let currentStep = 1;

        function updateProgress() {
            steps.forEach((step, index) => {
                if (index < currentStep) {
                    step.classList.add('active', 'completed');
                } else if (index === currentStep) {
                    step.classList.add('active');
                    step.classList.remove('completed');
                } else {
                    step.classList.remove('active', 'completed');
                }
            });

            // Set progress height based on current step
            const progressHeight = ((currentStep - 1) / (steps.length - 1)) * 100;
            progress.style.height = `${progressHeight}%`;

            // Update connector color based on current step
            connector.classList.toggle('active', currentStep === steps.length);

            // Update result based on current step
            resultBox.innerHTML = `<h2>${currentStep}</h2><p>${messages[currentStep - 1]}</p>`;
        }

        // Initialize progress height
        updateProgress();

        // Update progress on step click
        steps.forEach(step => {
            step.addEventListener('click', () => {
                const stepNumber = parseInt(step.getAttribute('data-step'), 10);
                currentStep = stepNumber;
                updateProgress();
            });
        });

        // Optionally: Adjust progress height on window resize
        window.addEventListener('resize', updateProgress);

        // Intersection Observer
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.text-content, .grid-item').forEach(element => {
            observer.observe(element);
        });

        // Accordion functionality
        document.querySelectorAll('.accordion-header').forEach(header => {
            header.addEventListener('click', function() {
                const content = this.nextElementSibling;
                const isOpen = content.style.display === 'block';

                // Close all accordion contents and remove active class
                document.querySelectorAll('.accordion-content').forEach(item => {
                    item.style.display = 'none';
                });
                document.querySelectorAll('.accordion-header').forEach(item => {
                    item.classList.remove('active');
                });

                // Open the clicked accordion content if it was not open
                if (!isOpen) {
                    content.style.display = 'block';
                    this.classList.add('active');
                }
            });
        });

    });

    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
        
            // Toggle the display of the clicked accordion content
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        
            // Toggle active class
            this.classList.toggle('active');
        });
        });

        document.querySelectorAll('.accordion-header').forEach(header => {
            header.addEventListener('click', function() {
                const content = this.nextElementSibling;
                const isOpen = content.style.display === 'block';
        
                // Close all accordion contents and remove active class
                document.querySelectorAll('.accordion-content').forEach(item => {
                    item.style.display = 'none';
                });
                document.querySelectorAll('.accordion-header').forEach(item => {
                    item.classList.remove('active');
                });
        
                // Open the clicked accordion content if it was not open
                if (!isOpen) {
                    content.style.display = 'block';
                    this.classList.add('active');
                }
            });
        });