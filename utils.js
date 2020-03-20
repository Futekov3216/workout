export default  {
     minutesToSecondsConverter: ( value ) => {
        return ( value * 60 )
     },
      
    secondsToMinutesConvertor: ( value ) => {
        return ( value / 60 )
     },

     getId: ( id ) => {
        return document.getElementById( id )
     }
}