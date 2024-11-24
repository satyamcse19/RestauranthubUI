export const CountClick=()=>{
    let numCount=0;
   function increaseNumCount (){
         numCount=numCount+1;
         console.log(numCount);
     }
     return (
        <div>
          <h1>Count Click: {numCount}</h1>
          <button onClick={increaseNumCount} style={{ backgroundColor: 'green', color: 'white', padding: '10px', border: 'none', cursor: 'pointer' }}>Increase number</button>
        </div>
      );
}