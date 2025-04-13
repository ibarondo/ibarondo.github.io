<?php 

$destinations = [
    ["Tagaytay", "assets/images/destinations/tagaytay.jpg"], 
    ["Palawan","assets/images/destinations/palawan.jpg"],
    ["Manila","assets/images/destinations/manila.jpg"],
    ["Cebu","assets/images/destinations/cebu.jpg"],
    ["Baguio","assets/images/destinations/baguio.jpg"],
    ["Boracay","assets/images/destinations/boracay.jpg"],
    ["Dumaguete","assets/images/destinations/dumaguete.jpg"],
    ["Iloilo","assets/images/destinations/iloilo.jpg"],
    ["Bicol","assets/images/destinations/bicol.jpg"],
    ["Batangas","assets/images/destinations/batangas.jpg"],
    ["Laguna","assets/images/destinations/laguna.jpg"],
    ["Davao","assets/images/destinations/davao.jpg"],
    ["Bohol","assets/images/destinations/bohol.jpg"],
    ["Cebu","assets/images/destinations/cebu.jpg"],
    ["Batanes","assets/images/destinations/batanes.jpg"]
]
?>


<div class="destiantion-title">
    <span>Popular Destinations</span>
</div>
<div class="container-fluid">
    <div class="row m-3 justify-content-center">
        <?php foreach ($destinations as $destination) { ?>
        <div class="card-destination col-12 col-sm-12 col-md-6 col-lg-4">
            <div class="card-places">
                <img src="<?php echo $destination[1] ?>" class="img-fluid" alt="<?php echo $destination[0] ?>">
                <div class="card-text-overlay">
                    <h4><?php echo $destination[0] ?> </h4>
                </div>
            </div>
        </div>
        <?php } ?>
    </div>
</div>