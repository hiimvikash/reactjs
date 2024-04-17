import { atom, atomFamily } from "recoil";
import { TODOS } from "./todos";

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: id => {
    return TODOS.find(x => x.id === id)
  }
});



// Doing this has a downside that evenif one <TODO/> changes it will re-render other <TODO/> 
const todosAtom = atom ({
    key: "atom",
    default: TODOS
})