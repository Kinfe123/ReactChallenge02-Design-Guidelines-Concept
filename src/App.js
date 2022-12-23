
import './App.css';
import Arrow from './Arrow';
import Arrow2 from './Arrow2';

function App() {
  return (
    <div className="App">
     <div className="headertext">
       <h2 className='design-header'>Design Guideline</h2>
       <h2 className='nextword'> Concept</h2>
   
     </div>
     <div className="actual-concepts">
       <div className='concepts'>
        <h3 className="column-header">Basic Button</h3>
        
        <h5 className='primary'>Primary </h5>
        <a href="#" className='btns'>Sumbit</a>
        
         <h5 className='primary'>Outline </h5>
        <a href="#" className='btns outline'>Sumbit</a>

        <h3 className="column-header">Icon Button</h3>
      <h5 className='primary'>Primary </h5>
        <a href="#" className='btns'>Get started <span className="spanforbtn"><Arrow /></span> </a>
        
         <h5 className='primary'>Outline </h5>
        <a href="#" className='btns outline ar'>Get started <span className="spanforbtn"><Arrow2 /></span> </a>
 
        
        

       </div>
       <div className='concepts'>

      <h3 className="column-header">Input</h3> 
      <h5 className='primary'>Basic State(<span className='placeholderfor'>Placeholder</span>) </h5>

         <input placeholder='Error' className='inputfor'   type='text' />
         <h5 className='primary' >Focus State State</h5>
      
      <input  className='inputfor focused'  type='text' />
      <h5 className='primary'>Normal State</h5>
      
      <input  className='inputfor'  type='text' />
      <h5 className='primary'>Error State </h5>
      
      <input  className='inputfor error'  type='text' />
      
       </div>
       <div className='concepts'>
       <h3 className="column-header">Input Toogler</h3>
       <h5 className='primary'>Hidden </h5> 
       <input  className='inputfor pass' type='password'/>
             {/* <input type="password" name="password" autocomplete="current-password" required="" id="id_password"/> */}
        <span className='eye'>  <i class="fa fa-eye-slash"></i>

      </span>
      <h5 className='primary'>Visible </h5> 
       <input  className='inputfor pass' type='text'/>
             {/* <input type="password" name="password" autocomplete="current-password" required="" id="id_password"/> */}
        <span className='eye-visible'>  <i class="fa fa-eye"></i>

      </span>
      <h3 className="column-header">Select Input</h3>
      <h5 className='primary'>Select Box </h5> 
       <input  className='inputfor pass' type='text'/>
             {/* <input type="password" name="password" autocomplete="current-password" required="" id="id_password"/> */}
        <span className='eye-visible'>  <i class="fa fa-eye"></i>

      </span>
      
       
       </div>
     </div>
    </div>
  );
}

export default App;
