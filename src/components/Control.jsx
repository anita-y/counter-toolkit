import { useDispatch } from "react-redux";
import { useRef } from "react";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";


const Control = () => {
    const dispatch = useDispatch();
    const inputRef = useRef(0);

    const handleIncrement = () => {
        dispatch(counterActions.increment());
    }

    const handleDecrement = () => {
        dispatch(counterActions.decrement());
    }

    const handleAdd = () => {
        // counterAction.add()
        dispatch(counterActions.add(Number(inputRef.current.value)))
        inputRef.current.value =0;
    }

    const handleSubs = () => {
        dispatch(counterActions.subs({toSub: Number(inputRef.current.value)}))
        inputRef.current.value =0;
    }

    const handlePrivacy = () => {
        dispatch(privacyActions.toggle())
    }

    return (
        <>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" className="btn btn-primary" onClick={handleIncrement}>Increment</button>
                <button type="button" className="btn btn-secondary" onClick={handleDecrement}>Decrement</button>
                <button type="button" className="btn btn-secondary" onClick={handlePrivacy}>Privacy</button>
            
            </div>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control">
                <input type="text"
                 aria-label="Add"
                 placeholder="Enter number"
                 aria-describedby="addon-wrapping"
                 ref={inputRef}
                 />
                <button type="button" 
                  className="btn btn-secondary" 
                  onClick={handleAdd}>Add</button>

                <button type="button" 
                  className="btn btn-secondary" 
                  onClick={handleSubs}>Substract</button>
            </div>
        </>
    )
}

export default Control;