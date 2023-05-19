import classes from './AddButton.module.css'

function AddButton({btnText, clickAction}) {
    return <button onClick={clickAction} className={classes['add-button']}>{btnText}</button>
}

export default AddButton;