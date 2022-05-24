import styles from 'css/cardui.module.css';
import TextField from '@mui/material/TextField';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import CircularProgress from '@mui/material/CircularProgress';
import HighlightAltIcon from '@mui/icons-material/HighlightAlt';
import { useRef, useState } from 'react';
import cloudinaryService from 'components/service/cloudinaryservice';

export default function CardItem(props) {

    const [imgLoding,setImgLoading] = useState(false);

    const onChangeValue = (e) =>{
     const value = e.currentTarget.value;
     const type =  e.currentTarget.name;
     props.onChangeValue(props.cardItem,value,type);
 }

    const onChangeFile = (e) =>{
        const file = e.target.files[0];
        if(file !== undefined ){
            setImgLoading(true);
            const imgurl = cloudinaryService(file);
            imgurl.then((data)=>{
            setImgLoading(false);
            props.onChangeFile(props.cardItem,data);
            })
        }
    }

    const removeCard = () =>{
            props.removeCardItem (props.cardItem);
    }
    const fileButton = useRef(null);
    const fileButtonOnClick = () =>{
       fileButton.current.click();
    }
    return (
        <section className={styles.cardsection} >
            <DeleteForeverSharpIcon className={styles.deletbutton} onClick={removeCard}/>
                
                <div className={styles.cardimg}><div className={styles.loadingprogress}>                    
                {imgLoding ? <CircularProgress /> : <img src={props.cardItem.fileurl} width='150px' height='200px' alt='img' />}</div>
                <input ref={fileButton} accept='image/*' type="file" onChange={onChangeFile}className={styles.filebutton}/>
                <HighlightAltIcon fontSize='medium' onClick={fileButtonOnClick} className={styles.fileIcon} /><span className={styles.imgsize}>150x200</span>
                </div>
        
                <ul className={styles.cardItemBg}>
                <li><TextField fullWidth name="name" size="small" label="name" variant="standard" onChange={onChangeValue} value={props.cardItem.name} spellCheck="false"/></li>
                <li><TextField fullWidth name="adress" size="small" label="adress" variant="standard" onChange={onChangeValue} value={props.cardItem.adress} spellCheck="false"/></li>
                <li><TextField fullWidth name="phone" size="small" label="phone" variant="standard" onChange={onChangeValue} value={props.cardItem.phone}/></li>
                <li><TextField fullWidth name="memo" size="small" label="memo" variant="standard" multiline rows={2} onChange={onChangeValue} value={props.cardItem.memo} spellCheck="false"/></li>

            </ul>
    </section>

    );
}
