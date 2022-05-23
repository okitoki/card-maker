const cloudinaryService = (imagefile)=> {

            const data = new FormData();
            data.append('file', imagefile)
            data.append('upload_preset','bymplk6q')
            data.append('cloud_name','dvifxn88v')
            
            const imgurl = fetch('https://api.cloudinary.com/v1_1/dvifxn88v/image/upload',{
                method:'post',
                body:data
            })
            .then (resp => {
                return resp.json()}
                )
            .then (data => {
                    return data.url;
                })
            .catch(err=>console.log(err))

        return imgurl;

}

export default cloudinaryService;