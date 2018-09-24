
<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS");
header("Access-Control-Max-Age: 1000");
header("Access-Control-Allow-Headers: Origin, Content-Type, Authorization, X-Requested-With");
header("Pragma: no-cache");

$request = $_SERVER['REDIRECT_URL'];
$base_file = basename($_SERVER['REQUEST_URI'], '?' . $_SERVER['QUERY_STRING']);

##know current environment:
require __DIR__ . '/../private/config.php';

if("$base_file" ==="login.php")
{
    require __DIR__ . '/../private/login.php';
}
else
{
    $res_scope = "test";

    if($DEPLOY_ENV === "PROD")
    {
        require __DIR__ . '/../private/validate_login.php';
        $res_scope = validate_login();
    }
    else if($DEPLOY_ENV === "DEV")
    {
        $res_scope = "admin";
    }


    if($res_scope == "public" || $res_scope == "mcm" || $res_scope == "admin")
    {
        switch ($base_file) 
        {
            case 'get_invoice.php' :
                require __DIR__ . '/../private/get_invoice.php';
                break;
            case 'download.php' :
                require __DIR__ . '/../private/download.php';
                break;     
            case 'generate_report.php' :
                require __DIR__ . '/../private/generate_report.php';
                break;   
            case 'logout.php' :
                require __DIR__ . '/../private/logout.php';
                break; 
            case 'get_cumbal.php' :
                require __DIR__ . '/../private/get_cumbal.php';
                break;                                 
        }
    }

    if($res_scope == "mcm" || $res_scope == "admin")
    {
        switch ($base_file) 
        {
            case 'update_invoice.php' :
                require __DIR__ . '/../private/update_invoice.php';
                break;      
            case 'post_invoice.php' :
                require __DIR__ . '/../private/post_invoice.php';                       
        }
    }

    if($res_scope == "admin")
    {
        switch ($base_file) 
        {
            case 'close_month.php' :
                require __DIR__ . '/../private/close_month.php';
                break;
            case 'delete_invoice.php' :
                require __DIR__ . '/../private/delete_invoice.php';
                break;
            case 'get_cheque.php' :
                require __DIR__ . '/../private/get_cheque.php';
                break;
            case 'init_month.php' :
                require __DIR__ . '/../private/init_month.php';
                break;
            case 'post_cheque.php' :
                require __DIR__ . '/../private/post_cheque.php';
                break;
            case 'post_cumbal.php' :
                require __DIR__ . '/../private/post_cumbal.php';
                break;
            case 'update_cheque.php' :
                require __DIR__ . '/../private/update_cheque.php';
                break;            
        }
    }
}
?>