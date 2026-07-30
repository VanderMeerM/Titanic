<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Titanic Sinking animation</title>
    <link rel="stylesheet" href="./titanic.css">
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&amp;display=swap" rel="stylesheet">

   <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.49/Tone.min.js" integrity="sha512-Siyxh4gyNM5SaERNa9BOZSPcu/auHyFUWn9OVFD7MxI3/dVPQklE7tfqS+pLmPHF1zo6UdDaJAp/thihrf0c7w==" crossorigin="anonymous" referrerpolicy="no-referrer">
    </script> -->
    <script defer type="text/javascript" src="./JS/titanic.js"></script>
    <script defer type="text/javascript" src="./JS/morse_code_dict.js"></script>
    <script defer type="text/javascript" src="./JS/play_morsecode.js"></script>

</head>
<body>

<div class="sky">

 <div id="time"> Wat gebeurde er op die fatale nacht van 14 april 1912 in de Atlantische Oceaan? </div> 

<div class="container_vessel">


<div id="vessel-complete"> 
    <img src="./img/titanic_complete.png">

</div>


</div>

<div class="iceberg">
    <img src="./img/iceberg.png">
</div>


<div class="container_vessel_pieces">
    
    <div id="vessel-rear"> 
    <img src="./img/titanic_rear_without funnels.png">
        <div id="vessel-rear_between"></div>
        <div id="funnel1"> <img src="./img/funnel1.png"></div>
        <div id="funnel2"> <img src="./img/funnel2.png"></div>
</div>

<div id="vessel-front"> 
    <img src="./img/titanic_front_without funnels.png">
        <div> 
            <img id="wifi3" src="./img/wifi_signal_3.png">
            <img id="wifi2" src="./img/wifi_signal_2.png">
            <img id="wifi1" src="./img/wifi_signal_1.png">
        </div>
        <div id="funnel3"> <img src="./img/funnel3.png"></div>
        <div id="funnel4"> <img src="./img/funnel4.png"></div>
</div>
</div>

    
</div>

<div class="sea">


</div>


</body>
</html>