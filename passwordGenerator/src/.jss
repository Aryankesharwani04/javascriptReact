<!DOCTYPE html>
<html>
<head>
    <title>DOM API for HTML modification</title>
</head>
<body style="background-color:lightblue;text-align:center">
    <h1 id="hdr1">Here's your ice cream</h1>
    <img id="img1" src="C:\Users\anubh\OneDrive\Desktop.png" alt="Ice cream is not ready">
    <p id="p1" onclick="eat()">Click here to eat</p>
    <script>
        let isEaten = false;

        function eat() {
            const header = document.getElementById('hdr1');
            const image = document.getElementById('img1');
            const paragraph = document.getElementById('p1');

            if (!isEaten) {
                header.textContent = 'Enjoy your ice cream!';
                image.src = 'C:\Users\anubh\OneDrive\Desktop.png';
                paragraph.textContent = 'Click here to refill';
                document.body.style.backgroundColor = 'lightpink';
                isEaten = true;
            } else {
                header.textContent = 'Here\'s your ice cream';
                image.src = 'C:\Users\anubh\OneDrive\Desktop.png';
                paragraph.textContent = 'Click here to eat';
                document.body.style.backgroundColor = 'lightblue';
                isEaten = false;
            }
        }
    </script>
</body>
</html>