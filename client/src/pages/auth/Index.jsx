import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React, { useState } from 'react'

const Auth = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmpassword] = useState("")

    const handleLogin = async ()=> {}

    const handleSignup = async ()=> {}

  return (
    <div className='h-screen w-screen flex items-center justify-center'>
        <div className='h-[80vh] bg-white border-2 border-white text-opacity-90  shadow-2xl w-[80vw] md:w-[90vw] lg:w[70vw] xl:w-[60vw] rounded-2xl grid xl:grid-cols-2'>
            <div className='flex flex-col gap-10 items-center justify-center'>
                <div className='flex items-center justify-center flex-col'>
                    <div className='flex items-center justify-center'>
                        <h1 className='text-5xl font-bold lg:text-6xl text-purple-900'>Welcome</h1>
                    </div>
                    <p className='font-medium text-center'>Fill in your Info to get Started</p>
                </div>
                <div className='flex items-center justify-center w-full'>
                    <Tabs className={'w-3/4'}>
                        <TabsList className={'bg-transparent rounded-none w-full'}>

                            <TabsTrigger value="login"
                            className={'data-state-active:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-state-active:text-black data--state-active:font-semibold data-state-active:border-b-purple-500 p-3 transition-all duration duration-300'}>
                                Login
                            </TabsTrigger>

                            <TabsTrigger value="signup"
                            className={'data-state-active:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-state-active:text-black data-state-active:font-semibold data-state-active:border-b-purple-500 p-3 transition-all duration duration-300'}>
                                Signup
                            </TabsTrigger>

                        </TabsList>

                        <TabsContent className={'flex flex-col gap-5 mt-10'} value="login">
                            <Input placeholder="Email" type="email" className={'rounded-full p-6'} value="Email" onChange={(e)=>setEmail(e.target.value)}/>

                            <Input placeholder="Password" type="password" className={'rounded-full p-6'} value="Password" onChange={(e)=>setPassword(e.target.value)}/>

                            <Button className={'rounded-full p-6 bg-purple-950 text-white font-bold text-xl'} onClick={handleLogin}>
                                Login
                            </Button>
                        </TabsContent>

                        <TabsContent className={'flex flex-col gap-5'} value="signup">
                            <Input placeholder="Email" type="email" className={'rounded-full p-6'} value="Email" onChange={(e)=>setEmail(e.target.value)}/>

                            <Input placeholder="Password" type="password" className={'rounded-full p-6'} value="Password" onChange={(e)=>setPassword(e.target.value)}/>

                            <Input placeholder="Confirm Password" type="password" className={'rounded-full p-6'} value="confirmPassword" onChange={(e)=>setConfirmpassword(e.target.value)}/>

                            <Button className={'rounded-full p-6 bg-purple-950 text-white font-bold text-xl'} onClick={handleSignup}>
                                Signup
                            </Button>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
            <div className='hidden xl:flex items-center justify-center bg-purple-950'>
                <p className='text-white font-bold text-center text-3xl'>Create your Account, and enjoy chatting with love ones</p>
            </div>
        </div>
    </div>
  )
}

export default Auth