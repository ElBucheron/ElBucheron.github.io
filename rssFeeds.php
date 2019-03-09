<!DOCTYPE html>
<html>
	<head>
        <link rel="icon" href="img/logo.png">
        <title>Security Notes</title>

        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href='https://fonts.googleapis.com/css?family=Fascinate Inline' rel='stylesheet'>
        <link href='https://fonts.googleapis.com/css?family=Montserrat Subrayada' rel='stylesheet'>
        <link rel='stylesheet' href='css/style.css'>
    </head>

	<body>
        
        <div class="logo">
            <a href="index.html">Bucheron <img src="img/logo.png" width="70"> Security</a>
        </div>

		<div class="notes">

			<?php
                $url = "https://nvd.nist.gov/feeds/xml/cve/misc/nvd-rss-analyzed.xml";
                $rss = simplexml_load_file($url);
                $html = '';
                echo('<h1>'.htmlspecialchars($rss->channel->title).'</h1>');
            ?>

            <div class="menu">
                <a href="index.html">| Tools |</a>
                <a href="textFiles.html">| Notes |</a><br>
            </div>

            <?php
                $first = true;
                foreach($rss as $item) {
                    if ($first == false) {
                        $html .= '<a href="'.htmlspecialchars($item->link).'">'.htmlspecialchars($item->title).'</a>';
                        $html .= '<p>'.htmlspecialchars($item->description).'</p>';
                    } else {
                        $first = false;
                        $html .= '<em>'.'Last update: '.htmlspecialchars($item->date).'</em><br>';
                    }
                }

                echo $html;
            ?>
			
		</div>

		<div class="footer">&copy; 2019, Ugo Reyne</div>

	</body>
</html>