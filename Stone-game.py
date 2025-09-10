import random
user_wins = 0
comp_wins = 0
options = ["Stone", "Paper", "Scissor"]

user_name = input("Please enter your sweet Name:- ")
print(f"Welcome Mr. {user_name} in Stone, Paper, Scissor Game. ")

while True:
    user_ans = input("Choose Stone/Paper/Scissor or Q for quite: ")
    if user_ans == "Q":
         break
    if user_ans not in options:
        print("Choose vailid option given obove. ")
        continue
    computer_choose = random.choice(options)
    print(f"Computer choose:{computer_choose}.")
    if user_ans == computer_choose:
        print("Tie")

    elif user_ans == "Stone" and computer_choose == "Scissor":
        print("YOU WON THE GAME")
        user_wins+=1

    elif user_ans == "Paper" and computer_choose == "Rock":
        print("YOU WON THE GAME")
        user_wins+=1

    elif user_ans == "Scissor" and computer_choose == "Paper":
        print("YOU WON THE GAME.")
        user_wins+=1
    else:
        print("YOU LOST THE GAME.")
        comp_wins+=1


print(f"You wins {user_wins} times")
print(f"Computer wins {comp_wins} times")
if user_wins > comp_wins:
    print("Congratulation you are the winner.")


print(f"Game is finished {user_name}, See you soon next time.")