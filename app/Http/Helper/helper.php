<?php
function jsonResponse($data, $status)
{
    return [
        'status' => $status,
        'data' => $data,
    ];
}