const React = require('react')
const Def = require('../default')

function new_form (data) {
    return (
        <Def>
          <main>
            <h1>Add a New Place</h1>
            <form method="POST" action="/places">
            <div className='row'>
            <label htmlFor="name">Place Name</label>
             <input id="name" name="name"
          required />
        </div>
        <div className='form-group col-sm-6'>
        <label htmlFor="pic">Place Picture</label>
        <input className='form-control' id="pic" name="pic" />
      </div>
      <div className='form-group col-sm-6'>
    <label htmlFor="city">City</label>
    <input className='form-control' id="city" name="city" />
    </div>
    <div className='form-group'>
    <label htmlFor="country">Country</label>
    <input className='form-control' id="country" name="country" />
    </div>
    
    <div className="form-group">
  <label for="founded">Founded Year</label>
  <input className="form-control" id="founded" name="founded" />
</div>
    
    <div className='form-group'>
    <label htmlFor="cuisines">Cuisines</label>
    <input className='form-control' id="cuisines" name="cuisines" required />
    </div>
    <input className='btn btn-primary' type="submit" value="Add Place" />

    
    </form>

          </main>
        </Def>
    )
}

module.exports = new_form
