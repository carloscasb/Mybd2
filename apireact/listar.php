
<?php 

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Request-With');
header('Content-Type: application/json; charset=utf-8');



include_once('conexao.php');

$busca = '%' .$_GET['busca']. '%';

$query = $pdo->query("SELECT * from usuarios where nome LIKE '$busca'");

 $res = $query->fetchAll(PDO::FETCH_ASSOC);

    for ($i=0; $i < count($res); $i++) { 
      foreach ($res[$i] as $key => $value) {
      }
        $dados[] = array(
            'id' => $res[$i]['id'],
            'nome' => $res[$i]['nome'],
            'email' => $res[$i]['email'],
            'senha' => $res[$i]['senha'],
           
            
        
        );

        }

        if(count($res) > 0){
                $result = json_encode(array('success'=>true, 'result'=>$dados));

            }else{
                $result = json_encode(array('success'=>false, 'result'=>'0'));

            }
            echo $result;

 ?>