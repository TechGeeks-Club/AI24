from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    
    ville = models.CharField(max_length=100, blank=True, null=True)
    etablissement = models.CharField(max_length=100, blank=True, null=True)
    niveau = models.CharField(max_length=50, blank=True, null=True) 
    specialite = models.CharField(max_length=100, blank=True, null=True)# select box ? licence master ing doctorat ?
    entreprise = models.CharField(max_length=100, blank=True, null=True)
    
    mode_de_participation = models.CharField(
        max_length=10, 
        choices=[("solo", "Solo"), ("equipe", "Équipe")],
        blank=True, 
        null=True
    )
    name_team = models.CharField(max_length=100, blank=True, null=True)
    lien_vers_github = models.URLField(blank=True, null=True)
    lien_vers_linkedin = models.URLField(blank=True, null=True)
    
    competences_techniques = models.TextField(blank=True, null=True)
    experience_en_ia = models.TextField(blank=True, null=True)
    motivation = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"Profile of {self.user.username}"
