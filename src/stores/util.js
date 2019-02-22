
const toType = name => name.split('-').map(x => x.toLocaleUpperCase()).join('_') 

const asyncActions = resource => {
    let upper = toType(resource)

    let group = ['_REQUEST', '_SUCCESS', '_ERROR']
        .map(x => upper + x)
        .map(x => ({type: x, act: data => ({type: x, payload: data})}))
    return group
}

const basicAction = resource => ({type: toType(resource), act: data => ({type: toType(resource), payload: data})}) 

export { asyncActions, basicAction }