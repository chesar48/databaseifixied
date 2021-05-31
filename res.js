'use strict';

exports.ok = function(values, res){
    var data = {
        'status' :200,
        'values' :values
    };

    console.log(values)
    res.json(data);
    res.end();
};

//response untuk nested matakuliah
exports.oknested = function(values, res){
    //lakukan akumulasi
    const hasil = values.reduce((akumulasikan, item)=>{
        //tentukan key group
        if(akumulasikan[item.user_name]){
            //buat variabel group user_name mahasiswa
            const group = akumulasikan[item.user_name];
            //cek jika isi array adalah matakuliah
            if(Array.isArray(group.tipe)){
                //tambahkan value ke dalam group tipe
                group.tipe.push(item.tipe);
            }else {
                group.tipe = [group.tipe, item.tipe];
            }
        }else {
            akumulasikan[item.user_name] = item;
        }
        return akumulasikan;
    }, {});

    var data = {
        'status':200,
        'values':hasil
    };
    
     res.json(data);
     res.end();

}


 