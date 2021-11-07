import java.awt.BasicStroke;
import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.Rectangle;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;

import java.util.ArrayList;

import javax.swing.JPanel;
import javax.swing.Timer;
import java.applet.*;
import java.awt.*;

public class snake extends Applet{
   public void paint(Graphics g){
      g.drawString("Welcome in Java Applet.",40,20);
   }
}
public class snake extends JPanel implements KeyListener, ActionListener {
	
	private boolean play = false;
	
	private ArrayList<Integer> snakeX = new ArrayList<Integer>();
	private ArrayList<Integer> snakeY = new ArrayList<Integer>();
	private int snakeParts = 5;
	
	private int score = 0;
	private int highScore = 0;
	
	private int colorChanged = 0;
	private int speedChanged = 0;
	
	private int timesPlayed = 0;
	
	private int foodX = (int) (Math.random() * 496) + 7;
	private int foodY = (int) (Math.random() * 496) + 7;
	
	private int food2X = (int) (Math.random() * 496) + 7;
	private int food2Y = (int) (Math.random() * 496) + 7;
	
	private Timer time;
	private int delay = 35;
	
	private int dirX = 0;
	private int dirY = -20;
	
	private String colorF = "blue";
	private String colorF2 = "blue";
	private String colorS = "blue";

	public Gameplay()
	{
		snakeX.add(300);
		snakeX.add(300);
		snakeX.add(300);
		snakeX.add(300);
		snakeX.add(300);
		
		snakeY.add(400);
		snakeY.add(420);
		snakeY.add(440);
		snakeY.add(460);
		snakeY.add(480);
		addKeyListener(this);
		setFocusable(true);
		setFocusTraversalKeysEnabled(false);
		time = new Timer (delay, this);
		time.start();
	}
	
	public void paint (Graphics g)
	{
		//background
		g.setColor(Color.lightGray);
		g.fillRect(1, 1, 592, 592);
		
		//border
		g.setColor(Color.yellow);
		g.fillRect(1, 0, 5, 592);
		g.fillRect(0, 1, 592, 5);
		g.fillRect(581, 0, 5, 592);
		g.fillRect(0, 558, 592, 5);
		
		//snake
		if (colorS.equals("green"))
		{
			g.setColor(Color.green);
		}
		if (colorS.equals("blue"))
		{
			g.setColor(Color.blue);
		}
		if (colorS.equals("white"))
		{
			g.setColor(Color.white);
		}
		if (colorS.equals("black"))
		{
			g.setColor(Color.black);
		}
		if (colorS.equals("orange"))
		{
			g.setColor(Color.orange);
		}
		if (colorS.equals("yellow"))
		{
			g.setColor(Color.yellow);
		}
		g.fillRect(snakeX.get(0), snakeY.get(0), 15, 15);
		for (int i = 1; i < snakeParts; ++i)
		{
			if (colorS.equals("green"))
			{
				g.setColor(Color.blue);
			}
			if (colorS.equals("blue"))
			{
				g.setColor(Color.cyan);
			}
			if (colorS.equals("white"))
			{
				g.setColor(Color.black);
			}
			if (colorS.equals("black"))
			{
				g.setColor(Color.white);
			}
			if (colorS.equals("orange"))
			{
				g.setColor(Color.yellow);
			}
			if (colorS.equals("yellow"))
			{
				g.setColor(Color.orange);
			}
			g.fillRect(snakeX.get(i), snakeY.get(i), 15, 15);
		}
		
		//food
		if (score % 5 == 0 && score != 0)
		{
			if (colorChanged < score)
			{
				int random = (int) (Math.random() * 6);
				int random2 = (int) (Math.random() * 6);
				if (random == 0)
				{
					colorF = "green";
				}
				if (random == 1)
				{
					colorF = "blue";
				}
				if (random == 2)
				{
					colorF = "white";
				}
				if (random == 3)
				{
					colorF = "black";
				}
				if (random == 4)
				{
					colorF = "orange";
				}
				if (random == 5)
				{
					colorF = "yellow";
				}
				
				if (random2 == 0)
				{
					colorF2 = "green";
				}
				if (random2 == 1)
				{
					colorF2 = "blue";
				}
				if (random2 == 2)
				{
					colorF2 = "white";
				}
				if (random2 == 3)
				{
					colorF2 = "black";
				}
				if (random2 == 4)
				{
					colorF2 = "orange";
				}
				if (random2 == 5)
				{
					colorF2 = "yellow";
				}
				colorChanged = score;
			}

			if (colorF.equals("green"))
			{
				g.setColor(Color.green);
			}
			if (colorF.equals("blue"))
			{
				g.setColor(Color.blue);
			}
			if (colorF.equals("white"))
			{
				g.setColor(Color.white);
			}
			if (colorF.equals("black"))
			{
				g.setColor(Color.black);
			}
			if (colorF.equals("orange"))
			{
				g.setColor(Color.orange);
			}
			if (colorF.equals("yellow"))
			{
				g.setColor(Color.yellow);
			}
			g.fillOval(foodX, foodY, 20, 20);
			
			if (colorF2.equals("green"))
			{
				g.setColor(Color.green);
			}
			if (colorF2.equals("blue"))
			{
				g.setColor(Color.blue);
			}
			if (colorF2.equals("white"))
			{
				g.setColor(Color.white);
			}
			if (colorF2.equals("black"))
			{
				g.setColor(Color.black);
			}
			if (colorF2.equals("orange"))
			{
				g.setColor(Color.orange);
			}
			if (colorF2.equals("yellow"))
			{
				g.setColor(Color.yellow);
			}
			g.fillOval(food2X, food2Y, 20, 20);
		}
		else
		{
			g.setColor(Color.red);
			g.fillOval(foodX, foodY, 20, 20);
			g.fillOval(food2X, food2Y, 20, 20);
		}

		//text
		Font font = new Font ("serif", Font.BOLD, 25);
		g.setFont(font);
		Rectangle head = new Rectangle (snakeX.get(0), snakeY.get(0), 15, 15);
		if (head.intersects(1, 0, 5, 592) || head.intersects(0, 1, 592, 5) || head.intersects(581, 0, 5, 592) || head.intersects(0, 558, 592, 5))
		{
			g.setColor(Color.black);
			g.drawString("GAME OVER! SCORE: " + score, 160, 250);
			g.drawString("Press ENTER to restart", 180, 300);
			g.drawString("HIGH SCORE: " + highScore, 195, 350);
			if (play)
			{
				System.out.println("Round " + timesPlayed + ": Score " + score);
				++timesPlayed;
				if (score > highScore)
				{
					System.out.println("New high score!");
				}
			}
			if (score > highScore)
			{
				g.setColor(Color.lightGray);
				g.drawString("HIGH SCORE: " + highScore, 195, 350);
				g.setColor(Color.black);
				g.drawString("HIGH SCORE: " + score, 195, 350);
				g.drawString("You got a new high score!", 170, 400);
			}
			play = false;
		}
		
		for (int i = 1; i < snakeParts; ++i)
		{
			if (head.intersects(snakeX.get(i), snakeY.get(i), 20, 20))
			{
				g.setColor(Color.black);
				g.drawString("GAME OVER! SCORE: " + score, 160, 250);
				g.drawString("Press ENTER to restart", 180, 300);
				g.drawString("HIGH SCORE: " + highScore, 195, 350);
				if (play)
				{
					System.out.println("Round " + timesPlayed + ": Score " + score);
					++timesPlayed;
					if (score > highScore)
					{
						System.out.println("New high score!");
					}
				}
				if (score > highScore)
				{
					g.setColor(Color.lightGray);
					g.drawString("HIGH SCORE: " + highScore, 195, 350);
					g.setColor(Color.black);
					g.drawString("HIGH SCORE: " + score, 195, 350);
					g.drawString("You got a new high score!", 170, 400);
				}
				play = false;
			}
		}
		
		if (timesPlayed == 0)
		{
			g.setColor(Color.black);
			g.drawString("Press ENTER to begin", 170, 350);
			if (snakeY.get(0) != 400)
			{
				++ timesPlayed;
			}
		}
		
		g.dispose();
	}
	
	@Override
	public void actionPerformed(ActionEvent e) {
		time.start();
		if (play)
		{
			for(int i = snakeParts - 1; i > 0; --i)
			{
				snakeX.set(i, snakeX.get(i - 1));
				snakeY.set(i, snakeY.get(i - 1));
			}
			snakeX.set(0, snakeX.get(0) + dirX);
			snakeY.set(0, snakeY.get(0) + dirY);
			Rectangle head = new Rectangle (snakeX.get(0), snakeY.get(0), 15, 15);
			Rectangle food = new Rectangle (foodX, foodY, 20, 20);
			Rectangle food2 = new Rectangle (food2X, food2Y, 20, 20);
			if (head.intersects(food))
			{
				++ score;
				++ snakeParts;
				if (score %5 == 1)
				{
					colorS = colorF;
				}
				snakeX.add(snakeX.get(snakeX.size() - 1));
				snakeY.add(snakeY.get(snakeY.size() - 1));
				foodX = (int) (Math.random() * 496) + 7;
				foodY = (int) (Math.random() * 496) + 7;
				food = new Rectangle (foodX, foodY, 20, 20);
				for (int i = 1; i < snakeParts; ++i)
				{
					if (food.intersects(new Rectangle(snakeX.get(i) - 5, snakeY.get(i) - 5, 30, 30)))
					{
						foodX = (int) (Math.random() * 496) + 7;
						foodY = (int) (Math.random() * 496) + 7;
						food = new Rectangle (foodX, foodY, 20, 20);
						i = 0;
					}
				}
			}
			
			if (head.intersects(food2))
			{
				++ score;
				++ snakeParts;
				if (score %5 == 1)
				{
					colorS = colorF2;
				}
				snakeX.add(snakeX.get(snakeX.size() - 1));
				snakeY.add(snakeY.get(snakeY.size() - 1));
				food2X = (int) (Math.random() * 496) + 7;
				food2Y = (int) (Math.random() * 496) + 7;
				food2 = new Rectangle (food2X, food2Y, 20, 20);
				for (int i = 1; i < snakeParts; ++i)
				{
					if (food2.intersects(new Rectangle(snakeX.get(i) - 5, snakeY.get(i) - 5, 30, 30)))
					{
						food2X = (int) (Math.random() * 496) + 7;
						food2Y = (int) (Math.random() * 496) + 7;
						food2 = new Rectangle (food2X, food2Y, 20, 20);
						i = 0;
					}
				}
			}
			
			if (score % 5 == 0 && score != 0)
			{
				if (speedChanged < score && delay > 0)
				{
					delay -= 2;
					speedChanged = score;
				}
				
			}
		}
		repaint();
	}

	@Override
	public void keyTyped(KeyEvent e) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void keyPressed(KeyEvent e) {
		// TODO Auto-generated method stub
		if (e.getKeyCode() == KeyEvent.VK_RIGHT)
		{
			turnRight();
		}
		if (e.getKeyCode() == KeyEvent.VK_LEFT)
		{
			turnLeft();
		}
		if (e.getKeyCode() == KeyEvent.VK_UP)
		{
			turnUp();
		}
		if (e.getKeyCode() == KeyEvent.VK_DOWN)
		{
			turnDown();
		}
		
		if (e.getKeyCode() == KeyEvent.VK_ENTER)
		{
			if (!play)
			{
				play = true;
				snakeX.set(0, 300);
				snakeX.set(1, 300);
				snakeX.set(2, 300);
				snakeX.set(3, 300);
				snakeX.set(4, 300);
				snakeY.set(0, 400);
				snakeY.set(1, 420);
				snakeY.set(2, 440);
				snakeY.set(3, 460);
				snakeY.set(4, 480);
				snakeParts = 5;
				
				foodX = (int) (Math.random() * 496) + 7;
				foodY = (int) (Math.random() * 496) + 7;
				
				food2X = (int) (Math.random() * 496) + 7;
				food2Y = (int) (Math.random() * 496) + 7;
				
				dirX = 0;
				dirY = -20;
				
				colorS = "blue";
				colorF = "blue";
				colorF2 = "blue";
				
				colorChanged = 0;
				speedChanged = 0;
				
				delay = 20;
				
				if (score > highScore)
				{
					highScore = score;
				}
				score = 0;
				
				repaint();
			}
		}
	}

	public void turnRight()
	{
		if (play && dirX != -20)
		{
			dirX = 20;
			dirY = 0;
		}
	}
	
	public void turnUp()
	{
		if (play && dirY != 20)
		{
			dirX = 0;
			dirY = -20;
		}
	}
	
	public void turnDown() 
  {
		if (play && dirY != -20) 
    {
			dirX = 0;
			dirY = 20;
		}
	}
	
	public void turnLeft()
	{
		if (play && dirX != 20)
		{
			dirX = -20;
			dirY = 0;
		}
	}
	
	@Override
	public void keyReleased(KeyEvent e) {
		// TODO Auto-generated method stub
		
	}
}