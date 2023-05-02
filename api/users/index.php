<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");
    include("DbConnect.php");
    $conn = new DbConnect();
    $db = $conn->connect();
    $method = $_SERVER['REQUEST_METHOD'];
    switch($method){
        case 'POST':
                $db->beginTransaction();
                $user = json_decode(file_get_contents('php://input'));
                if ($user->cek == "daftar_pasien") {
                    $sql="SELECT * FROM akun WHERE email=:email";
                    $stmt5=$db->prepare($sql);
                    $stmt5->bindParam(':email',$user->email);
                    $stmt5->execute();
                    $users=$stmt5->fetchObject();
                    if(isset($users->email)){
                        $data = ['status' => 0, 'message' => "Failed to create record."];
                    }
                    else{
                        $sql = "INSERT INTO akun (email, password, status,create_at) values(:email, :password, :status,:create_at)";
                        $stmt = $db->prepare($sql);
                        $status = "pasien";
                        $date=date("Y-m-d");
                        $stmt->bindParam(':email', $user->email);
                        $stmt->bindParam(':password', $user->password);
                        $stmt->bindParam(':status', $status);
                        $stmt->bindParam(':create_at',$date);
                
                    if ($stmt->execute()) {
                        $id_akun = $db->lastInsertId();
                        $querydokter = "INSERT INTO ". $status ." (id, nama,id_record) values(:id_akun, :nama, :id_record)";
                        $id_r=$id_akun+10;
                        $stmt2 = $db->prepare($querydokter);
                        $stmt2->bindParam(":id_akun", $id_akun);
                        $stmt2->bindParam(":nama", $user->nama);
                        $stmt2->bindParam(":id_record", $id_r);
                        $stmt2->execute(); 
                
                        $db->commit();
                        $data = ['status' => 1, 'message' => "Record successfully created"];
                    } else {
                        $data = ['status' => 0, 'message' => "Failed to create record."];
                    }
                    }
                    
                }
                else if($user->cek=="daftar_admin"){
                    $sql="SELECT * FROM akun WHERE email=:email";
                    $stmt5=$db->prepare($sql);
                    $stmt5->bindParam(':email',$user->email);
                    $stmt5->execute();
                    $users=$stmt5->fetchObject();
                    if(isset($users->email)){
                        $data = ['status' => 0, 'message' => "Failed to create record."];
                    }
                    else{
                        if($user->role=="Doctor"){
                            $sql = "INSERT INTO akun (email, password, status,create_at) values(:email, :password, :status,:create_at)";
                            $stmt = $db->prepare($sql);
                            $status = "dokter";
                            $date=date("Y-m-d");
                            $stmt->bindParam(':email', $user->email);
                            $stmt->bindParam(':password', $user->password);
                            $stmt->bindParam(':status', $status);
                            $stmt->bindParam(':create_at',$date);
                        
                            if ($stmt->execute()) {
                                $id_akun = $db->lastInsertId(); 
                                $querydokter = "INSERT INTO ". $status ." (id, nama,id_spesialisasi) values(:id_akun, :nama,:id_spesialis)";
                                $stmt2 = $db->prepare($querydokter);
                                $stmt2->bindParam(":id_akun", $id_akun);
                                $stmt2->bindParam(":nama", $user->nama);
                                $stmt2->bindParam(":id_spesialis", $user->roless);
                                $stmt2->execute(); 
                        
                                $db->commit();
                                $data = ['status' => 1, 'message' => "Record successfully created"];
                            } else {
                                $data = ['status' => 0, 'message' => "Failed to create record."];
                            }
                        }
                        else if($user->role=="Patient"){
                            $sql = "INSERT INTO akun (email, password, status,create_at) values(:email, :password, :status,:create_at)";
                            $stmt = $db->prepare($sql);
                            $status = "pasien";
                            $date=date("Y-m-d");
                            $stmt->bindParam(':email', $user->email);
                            $stmt->bindParam(':password', $user->password);
                            $stmt->bindParam(':status', $status);
                            $stmt->bindParam(':create_at',$date);
                        
                            if ($stmt->execute()) {
                                $id_akun = $db->lastInsertId();
                                $querydokter = "INSERT INTO ". $status ." (id, nama,id_record) values(:id_akun, :nama,:id_record)";
                                $id_record=$id_akun+10;
                                $stmt2 = $db->prepare($querydokter);
                                $stmt2->bindParam(":id_akun", $id_akun);
                                $stmt2->bindParam(":nama", $user->nama);
                                $stmt2->bindParam(":id_record", $id_record);
                                $stmt2->execute();
                        
                                $db->commit();
                                $data = ['status' => 1, 'message' => "Record successfully created"];
                            } else {
                                $data = ['status' => 0, 'message' => "Failed to create record."];
                            }
                        }
                    }

                }
                else if($user->cek=="login"){
                    $sql="SELECT * FROM akun WHERE email=:email";
                    $stmt=$db->prepare($sql);
                    $stmt->bindParam(':email',$user->email);
                    $a=$stmt->execute();
                    $users=$stmt->fetchObject();
                    if(isset($users->email)){
                        if($users->password=="$user->password"){
                            if($users->status=="dokter"){
                                $data = ['message' => "dokter Record successfully login", 'id' => $users->id,'status'=>$users->status];
                            }
                            else if($users->status=="admin"){
                                $data = ['message' => "admin Record successfully login", 'id' => $users->id,'status'=>$users->status];
                            }
                            else if($users->status="pasien"){
                                $data = ['message' => "pasien Record successfully login",'id' => $users->id,'status'=>$users->status];
                            }
                            
                        }
                        else{
                            $data = ['status' => 0, 'message' => "Failed to create recordddd."];
                        }
                        
                    }
                    else{
                        $data = ['status' => 0, 'message' => "Failed to create recorda."];
                    }
                }
                echo json_encode($data);
                break;
        case "GET": 
            $path = explode('/', $_SERVER['REQUEST_URI']);
            
            if(isset($_GET["id"])) {
                //var_dump($path);
                $sql = "SELECT * FROM akun WHERE id=:id";
                $stmt = $db->prepare($sql);
                $stmt->bindParam(':id', $_GET["id"]);
                if($stmt->execute()){
                    $data = ['status' => 1, 'message' => "Failed to create recordddd.",];
                    $users = $stmt->fetch(PDO::FETCH_ASSOC);
                }
                else{
                    $data = ['status' => 0, 'message' => "Failed to create recordddd."];
                }
                //$users = $stmt->fetch(PDO::FETCH_ASSOC);

            } 
            else if(isset($_GET["topbar"])){
                $sql = "SELECT akun.status,
                CASE WHEN akun.status = 'dokter' THEN dokter.nama ELSE 'admin' END AS nama 
              FROM akun 
              LEFT JOIN dokter ON akun.id = dokter.id 
              WHERE akun.id = :id";
                $stmt = $db->prepare($sql);
                $stmt->bindParam(':id', $_GET["topbar"]);
                if($stmt->execute()){
                    $data = ['status' => 1, 'message' => "Failed to create recordddd.",];
                    $users = $stmt->fetch(PDO::FETCH_ASSOC);
                }
                else{
                    $data = ['status' => 0, 'message' => "Failed to create recordddd."];
                }
            }
            else if(isset($_GET['acc'])){
                $sql = "SELECT akun.id,akun.email,akun.status,
                CASE WHEN akun.status = 'dokter' THEN dokter.nama ELSE pasien.nama END as nama,
                CASE WHEN akun.status = 'dokter' THEN akun.email ELSE akun.email END as email
                FROM akun 
                LEFT JOIN dokter ON akun.id = dokter.id 
                LEFT JOIN pasien ON akun.id = pasien.id
                WHERE akun.status <> 'admin'";
                $stmt = $db->prepare($sql);
                $stmt->execute();
                $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
            }
            else if(isset($_GET["home"])){
                //var_dump($path);
                $sql="SELECT akun.status, 
                CASE 
                  WHEN akun.status = 'dokter' THEN dokter.nama 
                  ELSE pasien.nama 
                END AS nama 
         FROM akun 
         LEFT JOIN dokter ON akun.id = dokter.id 
         LEFT JOIN pasien ON akun.id = pasien.id
         WHERE akun.id = :id";
                $stmt=$db->prepare($sql);
                $stmt->bindParam(":id",$_GET["home"]);
                $stmt->execute();
                $users = $stmt->fetchObject();
            }
            else if(isset($_GET["appo"])){
                
                $sql="SELECT * FROM pasien where id=:id";
                $stmt=$db->prepare($sql);
                $stmt->bindParam(":id",$_GET["appo"]);
                $stmt->execute();
                $users=$stmt->fetchObject();
            }
            else if(isset($_GET["appos"])){
                
                $sql="SELECT pasien.*, dokter.nama as nama_dokter,spesialis.spesialisasi, akun.email
                FROM pasien
                JOIN dokter ON pasien.id_dokter = dokter.id
                JOIN spesialis ON dokter.id_spesialisasi = spesialis.id_spesialisasi
                JOIN akun ON pasien.id=akun.id
                WHERE pasien.id_dokter IS NOT NULL";
                $stmt=$db->prepare($sql);
                $stmt->execute();
                $users=$stmt->fetchAll(PDO::FETCH_ASSOC);
            }
            else if(isset($_GET["appodok"])){
                
                $sql="SELECT pasien.*, dokter.nama as nama_dokter,dokter.gaji,spesialis.spesialisasi, akun.email
                FROM pasien
                JOIN dokter ON pasien.id_dokter = dokter.id
                JOIN spesialis ON dokter.id_spesialisasi = spesialis.id_spesialisasi
                JOIN akun ON pasien.id=akun.id
                WHERE pasien.id_dokter = :id";
                $stmt=$db->prepare($sql);
                $stmt->bindParam(":id",$_GET["appodok"]);
                $stmt->execute();
                $users=$stmt->fetchAll(PDO::FETCH_ASSOC);
            }
            else if(isset($_GET["appodokmod"])){
                
                $sql="SELECT pasien.*, akun.email
                FROM pasien
                JOIN akun ON pasien.id=akun.id
                WHERE pasien.id=:id";
                $stmt=$db->prepare($sql);
                $stmt->bindParam(":id",$_GET["appodokmod"]);
                $stmt->execute();
                $users=$stmt->fetchObject();
            }
            else if(isset($_GET["appousrmod"])){
                
                $sql="SELECT pasien.*, akun.email, record.obat, record.diagnosa
                FROM pasien
                JOIN akun ON pasien.id=akun.id
                JOIN record ON pasien.id_record = record.id_record
                WHERE pasien.id=:id";
                $stmt=$db->prepare($sql);
                $stmt->bindParam(":id",$_GET["appousrmod"]);
                $stmt->execute();
                $users=$stmt->fetchObject();
            }
            else if(isset($_GET["apposs"])){
                
                $sql="SELECT akun.id,dokter.nama, akun.email, spesialis.spesialisasi, dokter.gaji 
                FROM dokter 
                JOIN akun ON dokter.id = akun.id 
                JOIN spesialis ON dokter.id_spesialisasi = spesialis.id_spesialisasi;";
                $stmt=$db->prepare($sql);
                $stmt->execute();
                $users=$stmt->fetchAll(PDO::FETCH_ASSOC);
            }
            else if(isset($_GET["spesialis"])){
                
                $sql="SELECT * FROM spesialis";
                $stmt=$db->prepare($sql);
                $stmt->execute();
                $users=$stmt->fetchAll(PDO::FETCH_ASSOC);
            }
            else if(isset($_GET["appoi"])){
                $sql="SELECT nama FROM dokter";
                $stmt=$db->prepare($sql);
                $stmt->execute();
                $users=$stmt->fetchAll(PDO::FETCH_ASSOC);
            }
            else if(isset($_GET["spesial"])){
                //var_dump($path);
                $sql="SELECT dokter.nama
                FROM dokter 
                INNER JOIN spesialis ON dokter.id_spesialisasi = spesialis.id_spesialisasi 
                WHERE spesialis.spesialisasi = :spesialisasi";
                $stmt=$db->prepare($sql);
                $stmt->bindParam(":spesialisasi",$_GET["spesial"]);
                $stmt->execute();
                $users=$stmt->fetchAll(PDO::FETCH_ASSOC);

            }
            else if(isset($_GET["spesialis"])){
                
                $sql="SELECT * FROM dokter where id_spesialisasi=:id";
                $stmt=$db->prepare($sql);
                $stmt->bindParam(":id",$_GET["spesialis"]);
                $stmt->execute();
                $users=$stmt->fetchAll(PDO::FETCH_ASSOC);

            }
            else {
                $sql = "SELECT * FROM dokter";
                $stmt = $db->prepare($sql);
                $stmt->execute();
                $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
            }
            echo json_encode($users);
            break;
        case "PUT":
            $user = json_decode( file_get_contents('php://input') );
            if(isset($_GET["appo"])){
                if(isset($user->keluhan)){
                    if(isset($user->gender)){
                        $gender=$user->gender;
                    }
                    else{
                        $gender="Laki-Laki";
                    }
                    $sql="UPDATE pasien SET nama=:nama , phone=:phone , age=:age, gender=:gender, keluhan=:keluhan WHERE id=:id";
                    $stmt=$db->prepare($sql);
                    $nomor="0". $user->phone;
                    $stmt->bindParam(":id",$_GET["appo"]);
                    $stmt->bindParam(":nama",$user->nama);
                    $stmt->bindParam(":gender",$gender);
                    $stmt->bindParam(":age",$user->age);
                    $stmt->bindParam(":phone",$user->phone);
                    $stmt->bindParam(":keluhan",$user->keluhan);
                    $stmt->execute();
                    $data = ['status' => 1, 'message' => "Success to update record",'berhasil'=>"oye"];

                }
                else{
                    $data = ['status' => 0, 'message' => "Gagal Bre update record"];

                }
            }
            else if(isset($_GET["appodel"])){
                $sql="UPDATE pasien SET phone=NULL, age=0, gender=NULL, id_dokter=0, keluhan=NULL WHERE id=:id";
                $stmt=$db->prepare($sql);
                $stmt->bindParam(":id",$_GET["appodel"]);
                if($stmt->execute()){
                    $data = ['status' => 1, 'message' => "Behasil Bre"];
                }
                else{
                    $data = ['status' => 0, 'message' => "Gagal Bre"];
                }

            }
            else if(isset($_GET["admdok"])){
                $sql="SELECT id_spesialisasi from spesialis where spesialisasi=:spesialisasi";
                $stmt=$db->prepare($sql);
                $stmt->bindParam(":spesialisasi",$_GET["admdok"]);
                $stmt->execute();
                $users=$stmt->fetchObject();
                if(isset($users->id_spesialisasi)){
                    $sql="UPDATE dokter SET id_spesialisasi=:idspesialisasi where id=:id";
                    $stmt2=$db->prepare($sql);
                    $stmt2->bindParam(":idspesialisasi", $users->id_spesialisasi);
                    $stmt2->bindParam(":id",$user->id);
                    if($stmt2->execute()){
                        $data = ['status' => 1, 'message' => "Behasil Bre"];
                    }
                    else{
                        $data = ['status' => 0, 'message' => "Gagal Bre"];
                    }
                }
                else{
                    $data = ['status' => 0, 'message' => "Gagal Bre"];
                }
            }
            else if(isset($_GET["iddoktor"])){
                $sql="SELECT id from dokter where nama=:nama";
                $stmt=$db->prepare($sql);
                $stmt->bindParam(":nama",$_GET["iddoktor"]);
                $stmt->execute();
                $users=$stmt->fetchObject();
                if(isset($users->id)){
                    $sql="UPDATE pasien set id_dokter=:id_dokter where id=:id";
                    $stmt2=$db->prepare($sql);
                    $stmt2->bindParam(":id_dokter",$users->id);
                    $stmt2->bindParam(":id",$user->cek);
                    $stmt2->execute();
                    $data = ['status' => 1, 'message' => "Success to update record"];
                }
                else{
                    $data = ['status' => 0, 'message' => "Success to update record"];
                }
            }
            else if(isset($_GET["updok"])){
                    $sql="UPDATE dokter SET nama=:nama ,gaji=:gaji  where id=:id";
                    $stmt=$db->prepare($sql);
                    $stmt->bindParam(":id",$_GET["updok"]);
                    $stmt->bindParam(":nama",$user->nama);
                    $stmt->bindParam(":gaji",$user->gaji);
                    if($stmt->execute()){
                        $data = ['status' => 1, 'message' => "Success to update record",'aja'=>"oye"];
                    }
                    
                
            }
            else if(isset($_GET["medrecord"])){
                    $sql="INSERT INTO record (id_record, diagnosa, obat) VALUES (:id, :diagnosa,:obat)";
                    $stmt=$db->prepare($sql);
                    $stmt->bindParam(":id",$_GET["medrecord"]);
                    $stmt->bindParam(":diagnosa",$user->diagnosa);
                    $stmt->bindParam(":obat",$user->obat);
                    $stmt->execute();
                    $data = ['status' => 1, 'message' => "Success to update record",'berhasil'=>"oye"];
                
            }
            else{
            //var_dump($user);
            $sql="SELECT * FROM akun WHERE id=:id";
            $stmt=$db->prepare($sql);
            $stmt->bindParam(':id',$user->id);
            $stmt->execute();
            $users=$stmt->fetchObject();
            if($users->status == "dokter"){
                if($user->role=="Doctor"){
                    $sql = "UPDATE akun set email=:email,password=:password where id=:id";
                    $stmt2 = $db->prepare($sql);
                    $stmt2->bindParam(":email", $user->email);
                    $stmt2->bindParam(":password", $user->password);
                    $stmt2->bindParam(":id", $user->id);
                    if($stmt2->execute()){
                        $sql="UPDATE dokter set nama=:nama,id_spesialisasi=:id_spesialisasi where id=:id";
                        $stmt3=$db->prepare($sql);
                        $stmt3->bindParam(":nama",$user->nama);
                        $stmt3->bindParam(":id_spesialisasi",$user->roless);
                        $stmt3->bindParam(":id",$user->id);
                        $stmt3->execute();
                        $data = ['status' => 1, 'message' => "dokter Record successfully login"];
                    }
                    else{
                        $data = ['status' => 0, 'message' => "Failed to create recordddd"];
                    }
                }
                else if($user->role=="Patient"){
                    $sql="DELETE FROM dokter WHERE id=:id";
                    $stmt=$db->prepare($sql);
                    $stmt->bindParam(":id",$user->id);
                    if($stmt->execute()){
                        $sql="UPDATE akun set status=:status,email=:email where id=:id";
                        $status="pasien";
                        $stmt2=$db->prepare($sql);
                        $stmt2->bindParam(":status",$status);
                        $stmt2->bindParam(":email",$user->email);
                        $stmt2->bindParam(":id",$user->id);
                        if($stmt2->execute()){
                            $sql="INSERT INTO pasien (id,nama) values(:id,:nama)";
                            $stmt3=$db->prepare($sql);
                            $stmt3->bindParam(":id",$user->id);
                            $stmt3->bindParam(":nama",$user->nama);
                            $stmt3->execute();
                            $data = ['status' => 1, 'message' => "pasien Record successfully edit"];
                        }
                        else{
                            $data = ['status' => 0, 'message' => "Failed to edit"];
                        }
                    }
                }
            }
            else if($users->status == "pasien"){
                if($user->role=="Doctor"){
                    $sql="DELETE FROM pasien WHERE id=:id";
                    $stmt=$db->prepare($sql);
                    $stmt->bindParam(":id",$user->id);
                    if($stmt->execute()){
                        $sql="UPDATE akun set status=:status,email=:email where id=:id";
                        $status="dokter";
                        $stmt2=$db->prepare($sql);
                        $stmt2->bindParam(":status",$status);
                        $stmt2->bindParam(":email",$user->email);
                        $stmt2->bindParam(":id",$user->id);
                        if($stmt2->execute()){
                            $sql="INSERT INTO dokter (id,nama,id_spesialisasi) values(:id,:nama,:id_spesialisasi)";
                            $stmt3=$db->prepare($sql);
                            $stmt3->bindParam(":id",$user->id);
                            $stmt3->bindParam(":id_spesialisasi",$user->roless);
                            $stmt3->bindParam(":nama",$user->nama);
                            $stmt3->execute();
                            $data = ['status' => 1, 'message' => "dokter Record successfully edit"];
                        }
                        else{
                            $data = ['status' => 0, 'message' => "Failed to edit"];
                        }
                    }
                    
                }
                else if($user->role=="Patient"){
                    $sql = "UPDATE akun set email=:email,password=:password where id=:id";
                    $stmt2 = $db->prepare($sql);
                    $stmt2->bindParam(":email", $user->email);
                    $stmt2->bindParam(":password", $user->password);
                    $stmt2->bindParam(":id", $user->id);
                    if($stmt2->execute()){
                        $sql="UPDATE pasien set nama=:nama where id=:id";
                        $stmt3=$db->prepare($sql);
                        $stmt3->bindParam(":nama",$user->nama);
                        $stmt3->bindParam(":id",$user->id);
                        $stmt3->execute();
                        $data = ['status' => 1, 'message' => "pasien Record successfully login"];
                    }
                    else{
                        $data = ['status' => 0, 'message' => "Failed to create recordddd"];
                    }
                }
            }
        }
            echo json_encode($data);
            break;
        case "DELETE":
            $path = explode('/', $_SERVER['REQUEST_URI']);
                $sql = "SELECT * FROM akun WHERE id=:id";
                $stmt = $db->prepare($sql);
                $stmt->bindParam(':id', $path[3]);
                $stmt->execute();
                $users = $stmt->fetchObject();
                if($users->status=="dokter"){
                    $sql="DELETE FROM dokter WHERE id =". $users->id;
                    $stmt2=$db->prepare($sql);
                    if($stmt2->execute()){
                        $sql="DELETE FROM akun WHERE id = ". $users->id;
                        $stmt3=$db->prepare($sql);
                        if($stmt3->execute()){
                            $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
                        }
                        else{
                            $response = ['status' => 0, 'message' => 'Failed to delete record.'];
                        }
                    }else{
                        $response = ['status' => 0, 'message' => 'Failed to delete record.'];
                    }
                    $response = ['status' => 0, 'message' => 'Failed to delete record.'. $path[3]];
                }
                else if($users->status=="pasien"){
                    $sql="DELETE FROM pasien WHERE id =". $users->id;
                    $stmt2=$db->prepare($sql);
                    if($stmt2->execute()){
                        $sql="DELETE FROM akun WHERE id = ". $users->id;
                        $stmt3=$db->prepare($sql);
                        if($stmt3->execute()){
                            $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
                        }
                        else{
                            $response = ['status' => 0, 'message' => 'Failed to delete record.'];
                        }
                    }else{
                        $response = ['status' => 0, 'message' => 'Failed to delete record.'];
                    }
                }
            
            echo json_encode($response);
            break;
    }
?>