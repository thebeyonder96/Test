import express, { Router } from 'express'
import { photoModel } from '../models/photos.model'

const router = express.Router()
router.use(express.json())

// Add photo details to DB
router.post('/add',async(req,res)=>{
    const {name,description,mime_type,media_metadata} = req.body
    try {
        const photo = new photoModel({
            name,
            description,
            mime_type,
            media_metadata
        })
        
        const result = await photo.save()
        if(!result) return res.status(400).json('Unable to add data')
        res.status(200).json({
            message:'Success',
            data:result
        })
    } catch (error) {
        console.log(error);
        
        res.status(500).json('Database error')
    }
})

// Updating photo details
router.put('/update/:id',async(req,res)=>{
    const id = req.params.id
    try {
        const photo = await photoModel.findByIdAndUpdate(id,req.body,{new:true})
        if(!photo) return res.status(400).json('Unable to update')
        res.status(200).json({
            message:'Success',
            data:photo
        })
    } catch (error) {
        res.status(500).json('Database error')
    }
})

// Deleting photo
router.delete('/delete/:id',async(req,res)=>{
    const id = req.params.id
    try {
        const deleted = await photoModel.findByIdAndDelete(id,{new:true})
        if(!photo) return res.status(400).json('Unable to delete')
        res.status(200).json('Deleted successfully')
    } catch (error) {
        res.status(500).json('Database error')
    }
})

// Getting single photo
router.get('/single/:id',async(req,res)=>{
    const id = req.params.id
    try {
        const photo = await photoModel.findById(id)
        if(!photo) return res.status(400).json('Photo not found')
        res.status(200).json({
            message:'Success',
            data:photo
        })
    } catch (error) {
        res.status(500).json('Database error')
    }
})

// Get all photo details
router.get('/all',async(req,res)=>{
    try {
        const all = await photoModel.find()
        if(!all) return res.status(400).json('Photos not found')
        res.status(200).json({
            message:'Success',
            data:all
        })
    } catch (error) {
        res.status(500).json('Database error')
    }
})

export const photo = router
