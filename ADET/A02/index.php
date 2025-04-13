<?php

$page = "home"; // Default page

if (isset($_GET['page'])) {
    $page = $_GET['page'];
    switch ($page) {
        case "home":
            $page = "home";
            break;
        case "destination":
            $page = "destination";
            break;
        case "gallery":
            $page = "gallery";
            break;
        case "map":
            $page = "map";
            break;
    }
} else {
    header("Location: index.php?page=home");
}

?>

<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Philippines</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="assets/styles.css">
    <link rel="icon" href="assets/images/philippines.png">
</head>

<body>
    <div class="container-fluid m-0 p-0">
        <div class="row g-0">
            <div class="col-2 col-sm-4 col-md-2 col-lg-3">
                <div class="logo-container">
                    <a href="?page=home" class="ph-logo">
                        <img src="assets/images/philippines.png" alt="Logo" class="img-fluid">
                        <span class="logo-text">Philippines</span>
                    </a>
                </div>
                <div class="card card-controller">
                    <div class="controller">
                        <a href="?page=home" type="button" class="controller-button"><i class='bx bx-home-alt'></i>
                            <h4>Home</h4>
                        </a>
                        <a href="?page=destination" type="button" class="controller-button"><i class='bx bx-map'></i>
                            <h4>Destination</h4>
                        </a>
                        <a href="?page=gallery" type="button" class="controller-button"><i class='bx bx-images'></i>
                            <h4>Gallery</h4>
                        </a>
                        <a href="?page=map" type="button" class="controller-button"><i class='bx bx-map-alt'></i>
                            <h4>Map</h4>
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-10 col-sm-8 col-md-10 col-lg-9">
                <div class="card card-view p-0 m-0">

                    <?php include("shared/" . $page . ".php"); ?>

                </div>
            </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq"
            crossorigin="anonymous"></script>
</body>

</html>