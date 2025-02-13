<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Valentine's Countdown</title>
    <style>
        body {
            background: url('https://i.ibb.co/tMsPkFmR/mercedes.jpg') no-repeat center center fixed;
            background-size: cover;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            color: white;
            font-family: 'Arial', sans-serif;
            text-align: center;
        }

        #clock {
            font-size: 2.5rem;
            font-weight: bold;
            letter-spacing: 3px;
            text-shadow: 0 0 10px cyan, 0 0 20px cyan;
            font-family: 'Orbitron', sans-serif;
        }

        .btn {
            margin-top: 15px;
            padding: 12px 25px;
            font-size: 1.1rem;
            font-weight: bold;
            color: white;
            background: linear-gradient(90deg, red, pink);
            border: none;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
            box-shadow: 0 0 10px rgba(255, 0, 0, 0.8);
            text-decoration: none;
            display: inline-block;
        }

        .btn.available {
            background: linear-gradient(90deg, #00ff00, #009900);
            box-shadow: 0 0 20px rgba(0, 255, 0, 0.8);
            cursor: pointer;
        }

        .btn.available:hover {
            background: linear-gradient(90deg, #009900, #00ff00);
            box-shadow: 0 0 20px rgba(0, 255, 0, 1);
        }

        footer {
            position: fixed;
            bottom: 10px;
            font-size: 1rem;
            text-shadow: 0 0 5px cyan;
            width: 100%;
            text-align: center;
        }

        @media screen and (max-width: 600px) {
            #clock {
                font-size: 2rem;
            }
            .btn {
                font-size: 1rem;
                padding: 10px 20px;
            }
        }
    </style>
</head>
<body>
    <h1>Valentine's Countdown</h1>
    <div id="clock">00:00:00:00</div>

    <button id="continueBtn" class="btn" disabled>Loading...</button>
    <a class="btn" href="https://whatsapp.com/channel/0029Vajvy2kEwEjwAKP4SI0x" target="_blank">Join Our Channel</a>

    <footer>
        <p>Marisel Made It.</p>
    </footer>

    <script src="valentine.js"></script>
</body>
</html>
