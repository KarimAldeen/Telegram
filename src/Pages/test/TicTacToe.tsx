import React, { useState } from 'react'


const DataSizeGenerater = (size:number)=>{
  let DataSize = []
  for (let index = 0; index < size; index++) {
  DataSize.push([...Array(size)])  
  }
  return DataSize
}
const TicTacToe = () => {

  const [Board, setBoard] = useState(DataSizeGenerater(3))
  const [value, setvalue] = useState("X")
  const [IsWin, setIsWin] = useState(false)
  
const CheckHorisontal =(board:any)=>{
  for(let row of board){
    const RowSet = new Set(row)
    if(RowSet.size == 1 && !RowSet.has(undefined)){
      return true ;
    }
    
  }
  }
  const rowToColum = (board:any)=>{
    let NewBoar = []
    let colum  = 0
    while(colum < board.length){
        const newRow=[]
        for (let row = 0; row < board.length; row++) {
          newRow.push(board[row][colum])          
        }
        NewBoar.push(newRow)
        colum ++ 
    }
    return NewBoar
  }
  const diagnoToRow = (board: any) => {
    const newBoard: any = [[], []];
    const length = board.length;
    for (let i = 0; i < length; i++) {
      newBoard[0].push(board[i][i]);
      newBoard[1].push(board[i][length - 1 - i]);
    }
    console.log(newBoard);
  
    return newBoard;
  };
  
  const checkForWin = (board:any)=>{
    if(CheckHorisontal(board)){
      return true
    }
    if(CheckHorisontal(rowToColum(board))){
      return true
    }
    if(CheckHorisontal(diagnoToRow(board))){
      return true
    }


    

  }
  const handelClick = (row:any,colum:any)=>{
  
    // setBoard()
    // console.log(Board[item]);
    if (!Board[row][colum] && !IsWin) {
 
        Board[row][colum] = value === "X" ? "O" : "X"
        setvalue(value === "X" ? "O" : "X")
        setBoard([...Board])
        if(checkForWin(Board)){
         setIsWin(true)
          
        }
    }
   

  }
  
  return (
   <>
    

    {IsWin ? 
    <div>
      <div className='Restart' onClick={()=>{ setBoard(DataSizeGenerater(3)); setIsWin(false)  }}>
     <h1>
     Restart
     </h1>
    </div>
     <h1>
     The Winner is {value}
     </h1>
        </div>
    : 
    <div className='' >
    <div className='Restart' onClick={()=>{ setBoard(DataSizeGenerater(3)); setIsWin(false)  }}>
     <h1>
     Restart
     </h1>
    </div>
     {Board?.map((item:any,row:any)=>{
       return(
           <div className='row' key={row}>
               {item?.map((item:any,colum:any)=>{
                 return(
                       <div key={colum} className='colum' onClick={()=> handelClick(row,colum)} >
                           {item}
                       </div>
                 )
               })}
           </div>
       )
     })}

   </div>
    }
   </>
  )
}

export default TicTacToe