class ComponentEntiy {
	constructor({ id, is, type, text, html, model, src, style,options }) {
		this.id = id || '';
		this.is = is || '';
		this.type = type || '';
		this.text = text || '';
		this.html = html || '';
		this.src = src || '';
		this.model = model || '';
		this.style = style || '';
        this.options=options|| '';
	}
}
export default ComponentEntiy;
