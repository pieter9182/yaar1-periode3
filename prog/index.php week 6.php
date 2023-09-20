<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    //Vergelijkingsoperator
$nummer = 5;
$nummer1 = 5;
$answer = $nummer == $nummer1;
$answer2 = $nummer != $nummer1;
$answer3 = $nummer === $nummer1;
$answer4 = $nummer > $nummer1;
$answer5 = $nummer < $nummer1;
$answer6 = $nummer >= $nummer1;
$answer7 = $nummer <= $nummer1;
echo "<h1>{$answer}</h1>";
echo "<h1>{$answer2}</h1>";
echo "<h1>{$answer3}</h1>";
echo "<h1>{$answer4}</h1>";
echo "<h1>{$answer5}</h1>";
echo "<h1>{$answer6}</h1>";
echo "<h2>{$answer7}</h2>";


$naam = "damian";
echo "<h1>{$naam}</h1>";

//Rekenkundige operator
$leeftijd = 18;
$leeftijd +=  1;
$leeftijd--;
--$leeftijd;
$leeftijd = $leeftijd * 2;
$leeftijd = $leeftijd / 4;
print $leeftijd % 3;
print $leeftijd ** 2;

echo "<h1>{$leeftijd}</h1>";
    ?>
</body>
</html>