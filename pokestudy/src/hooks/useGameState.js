import { useState, useEffect, useRef } from 'react';
import pokemonNameGrab from '../utils/pokemonNameGrab.js';
import utils from '../utils.js';

const useGameState = () => {
    const [gameState, setGameState] = useState({
        answerBank: [],
        correctAnswerBank: [],
        currentPokemon: "pikachu",
        name: "",
        url: "",
        status: "pending",
        progress: new Array(6),
        seconds: 1500,
        success: false,
        score: 0,
        session: true,
        region: "Kanto"
    });

    const cat = 'cat'
    console.log(cat)
    const dragItem = useRef(null);
    const dragOverItem = useRef(null);

    const updateGameState = (newState) => {
        setGameState((prevState) => ({
            ...prevState,
            ...newState
        }));
    };


    //
    const handleSort = (answerBank, setAnswerBank) => {
        console.log("fired");
        // console.log(dragItem.current, dragOverItem.current);
        let _answerBank = [...answerBank];

        [_answerBank[dragItem.current], _answerBank[dragOverItem.current]] = [
            _answerBank[dragOverItem.current],
            _answerBank[dragItem.current],
        ];
        // const draggedItem = _answerBank.splice(dragItem.current, 1)[0];
        console.log(dragItem.current);
        console.log(dragOverItem.current);

        //reset refs
        dragItem.current = null;
        dragOverItem.current = null;
        // console.log(_answerBank, answerBank);
        setAnswerBank({ answerBank: _answerBank });
    };
    //

    const handleSetNewPokemon = () => {
        const newPokemon = pokemonNameGrab(gameState.region).name.toLowerCase()
        updateGameState({ currentPokemon: newPokemon });
    };
    const handleMatchCheck = (answers) => {
        const success = utils.checkAnswerArray(answers, gameState.correctAnswerBank);

        updateGameState({success: success});
    };
    const handleSingleMatchCheck = () => {
        let _progress = utils.checkSingleAnswers(gameState.answerBank, gameState.correctAnswerBank);

        updateGameState({ progress: _progress });
    };

    const handleSessionStop = () => {
        updateGameState({ session: false });
    };
    const handleSuccess = () => {
        let _score = gameState.score;
        if (gameState.success) {
            _score = gameState.score + 1;
            handleSetNewPokemon();
        }
        updateGameState({ score: _score, success: false });
    };

    // Data fetching
    const fetchPokemonData = async () => {
        updateGameState({ status: "pending" });
        const data = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${gameState.currentPokemon}`
        );
        const json = await data.json();
        updateGameState({ correctAnswerBank: json.stats, name: json.name, url: json.sprites.other["official-artwork"].front_default })
        const randomizedStatArray = utils.randomizedStats(json.stats);
        updateGameState({ answerBank: randomizedStatArray });
    };

    useEffect(() => {
        fetchPokemonData()
            .catch(console.error)
            .then(
                () => updateGameState({ status: "complete" }),
                () => updateGameState({ status: "failed" })
            );
    }, [gameState.currentPokemon]);

    useEffect(() => {
        handleSingleMatchCheck();
        handleMatchCheck(gameState.answerBank);
    }, [gameState.answerBank]);

    useEffect(() => {
        handleSuccess();
    }, [gameState.success]);

    useEffect(() => {
        handleSetNewPokemon()
    }, [gameState.region])

    useEffect(() => {
        let interval = null;
        if (gameState.session) {
            interval = setInterval(() => {
                updateGameState({seconds: gameState.seconds - 1});
            }, 1000);
        }
        if (gameState.seconds === 0) {
            updateGameState({session: false});
        }
        return () => clearInterval(interval);
    }, [gameState.session, gameState.seconds]);

    return {
        gameState,
        updateGameState,
        handleSort,
        handleSessionStop,
        handleSetNewPokemon,
        dragItem,
        dragOverItem,
    };
}

export default useGameState;
