const Templates = ({templates,setMeme}) => {
    return (
        <div className="templates">
      <h1>Meme Generator</h1>
      {templates.map(template => (
          <div key={template.id} className="template"
              onClick={() => {
              setMeme(template)
          }}>
          <div style={{ backgroundImage: `url(${template.url})` }}
          className="image">
            
          </div>
        </div>
      ))}

    </div>

    );
}

export default Templates