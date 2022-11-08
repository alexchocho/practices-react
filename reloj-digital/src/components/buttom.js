import '../stylesheet/buttom.css'
function Button(props) {
	return (
		<div className='button'>
			<div onClick={() => props.changeEstilo(props.estilo)} className={props.estilo}>
			</div>
		</div>
	)
}

export default Button