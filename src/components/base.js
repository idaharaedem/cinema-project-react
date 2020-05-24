export const wordLimit = (title, limit = 15) => {

    const newTitle = [];
    if(title.length > limit) {
        
        title.split(' ').reduce((acc,current)=> {
            if(acc + current.length <= limit){
                newTitle.push(current)
            }
        return acc + current.length;
        },0);

        return `${newTitle.join(' ')}...`;
    }

    return title;

}