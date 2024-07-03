<?php
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');

$startTime = time();

while (true) {
  echo "data: ". time() - $startTime. "\n\n";
  ob_flush();
  flush();
  sleep(1);
}