// import exampleData from "simple-mind-map/example/exampleData"
// import { simpleDeepClone } from 'simple-mind-map/src/utils/index'
import exampleData from "mind-map-example/example/exampleData"
import { simpleDeepClone } from 'mind-map-example/src/utils/index'

const SIMPLE_MIND_MAP_DATA = 'SIMPLE_MIND_MAP_DATA'

const copyMindMapTreeData = (tree, root) => {
    tree.data = simpleDeepClone(root.data)
    // tree.data.isActive = false
    tree.children = []
    if (root.children && root.children.length > 0) {
        root.children.forEach((item, index) => {
            tree.children[index] = copyMindMapTreeData({}, item)
        })
    }
    return tree;
}

export const getData = () => {
    let store = localStorage.getItem(SIMPLE_MIND_MAP_DATA)
    // store = null
    if (store === null) {
        console.log('liutongbin===getData',store)
        return simpleDeepClone(exampleData)
    } else {
        try {
            return JSON.parse(store)
        } catch (error) {
            return simpleDeepClone(exampleData)
        }
    }
}

export const storeData = (data) => {
    try {
        let originData = getData()
        originData.root = copyMindMapTreeData({}, data)
        let dataStr = JSON.stringify(originData)
        localStorage.setItem(SIMPLE_MIND_MAP_DATA, dataStr)
    } catch (error) {
        console.log(error)
    }
}

export const storeConfig = (config) => {
    try {
        let originData = getData()
        originData = {
            ...originData,
            ...config
        }
        let dataStr = JSON.stringify(originData)
        localStorage.setItem(SIMPLE_MIND_MAP_DATA, dataStr)
    } catch (error) {
        console.log(error)
    }
}