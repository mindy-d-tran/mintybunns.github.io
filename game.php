<?php echo file_get_contents("html/head.html")?>
        <!--lets the player interact with baby Malleus-->
        <div class="buttons">
            <button id="feed-button" onclick="game(feedVal)">feed</button>
            <button id="play-button" onclick="game(playVal)">play</button>
            <button id="bath-button" onclick="game(bathVal)">bath</button>
        </div>
    </body>

    <script src="daycare.js"></script>
    <script>
        ctx.fillStyle = "#5C505C";
        ctx.fillRect(0,0,800,450);
        bg.onload();
    </script>
</html>