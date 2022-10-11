<?php echo file_get_contents("html/head.html")?>
        <!--lets the player see intro/ tuturial-->
        <div class="buttons">
            <button id="prev" onclick="minus()" disabled>prev</button>
            <button id="next" onclick="plus()">next</button>
        </div>
    </body>

    <script src="test.js"></script>
    <script>
        ctx.fillStyle = "#5C505C";
        ctx.fillRect(0,0,800,450);
        INTRO1.onload();
    </script>
</html>