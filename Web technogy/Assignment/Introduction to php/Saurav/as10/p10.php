

<!DOCTYPE html>
<html>
<head>
    <title>Display Emploee Details</title>
</head>
<body>
    <h1>Employee Details</h1>
    <p><strong>Name:</strong> <?php echo htmlspecialchars($_POST["name"]); ?></p>
    <p><strong>Salary:</strong> <?php echo htmlspecialchars($_POST["salary"]); ?></p>
    <p><strong>Designation:</strong> <?php echo htmlspecialchars($_POST["designation"]); ?></p>
    <p><strong>Address:</strong> <?php echo htmlspecialchars($_POST["address"]); ?></p>
</body>
</html>
