<?php

require 'vendor/autoload.php';

$app = new \Slim\Slim([
        'debug' => true,
        'log.level' => \Slim\Log::DEBUG,
        'log.enabled' => true
]);

$app->get('/:itemtype/:urlTitle', function ($name) {
    echo "Hello, $name";
});
$app->get('/:itemtype/', function ($itemtype) {
    $use = '\Less\Controller\''.str_uppercase($itemtype);
    new $use();
});
$app->run();