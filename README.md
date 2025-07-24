<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8" />
  <title>Khaled ❤️ Noor</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div id="login">
    <h2>أدخل الرمز السري</h2>
    <input type="password" id="passInput" placeholder="الرمز السري" />
    <button id="loginBtn">دخول</button>
    <p id="loginError" style="color:red; display:none;">
      رمز خطأ، حاول مرة ثانية.
    </p>
  </div>

  <div id="content" style="display:none;">
    <h1>Khaled ❤️ Noor</h1>
    <p id="welcome">
      أهلا بكما — الحين تقدر تضيف رسائل، صور، وعدّاد أيام.
    </p>

    <div id="messages"></div>

    <textarea id="newMsg" placeholder="اكتب رسالتك هنا…" rows="4"></textarea
    ><br />
    <button id="addMsgBtn">إضافة رسالة</button>

    <p>اليوم: <span id="today"></span></p>
    <p>
      من أول ما عرفنا بعض مرّ: <span id="daysCount"></span> يوم
    </p>
  </div>

  <script src="script.js"></script>
</body>
</html>
