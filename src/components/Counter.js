import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/counter/counterSlice";
import { View, Text, Button } from "react-native";

const Counter =()=>{
    const count=useSelector((state)=>state.counter.count);
    const dispatch=useDispatch();
    return(
        <View>
            <Text>Counter App</Text>
            <Text>{count}</Text>
            <View>
                <Button title="+" onPress={()=>dispatch(increment())} />
                <Button title="-" onPress={()=>dispatch(decrement())} />
            </View>
        </View>
    );
}

export default Counter;