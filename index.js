// Copyright 2023 mitchell
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    const resp = string.toUpperCase();
    console.log(resp)
}

function logWhisper(string) {
    const resp = string.toLowerCase();
    console.log(resp)
}

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()){
        return "I can't hear you!"
    }else if (string === string.toUpperCase()){
        return "YES INDEED!"
    }else if (string === "Let's have dinner together!"){
        return "I would love to!"
    }
}