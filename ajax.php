<?php

$action = $_GET['action'] ?? '';

switch ($action) {
    case 'send_mail':
        require 'form_processing.php';
        die();
}