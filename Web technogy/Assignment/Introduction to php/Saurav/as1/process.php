<?php
if (isset($_POST['itemcode'])) {
  $itemcode = explode(',', $_POST['itemcode']);
  $itemname = explode(',', $_POST['itemname']);
  $unitssold = explode(',', $_POST['unitssold']);
  $rate = explode(',', $_POST['rate']);

  $total_amount = 0;

  echo "<table border='1'>";
  echo "<tr>
          <th>Item Code</th>
          <th>Item Name</th>
          <th>Units Sold</th>
          <th>Rate</th>
          <th>Amount</th>
        </tr>";

  for ($i = 0; $i < count($itemcode); $i++) {
    $amount = $unitssold[$i] * $rate[$i];
    $total_amount += $amount;
    echo "<tr>
            <td>$itemcode[$i]</td>
            <td>$itemname[$i]</td>
            <td>$unitssold[$i]</td>
            <td>$rate[$i]</td>
            <td>$amount</td>
          </tr>";
  }

  echo "<tr>
          <td colspan='4' align='right'>Total Amount:</td>
          <td>$total_amount</td>
        </tr>";
  echo "</table>";
}
?>